import { Request, Response } from "express";
import { createSetting, getSetting, findAndUpdateSetting, getOneSetting, deleteSettings } from "../service/setting.service";
import { CreateSettingInput } from "../schema/setting.schema";
import { SettingDocument } from "../documents/setting.document";

export async function createSettingHandler(
  req: Request<{}, {}, CreateSettingInput["body"]>,
  res: Response
) {
  const userId = res.locals.user._id;
  const body = {... req.body } as SettingDocument ;
  const setting = await createSetting( body );
  return res.send(setting);
}

export async function getSettingHandler(req: Request, res: Response){
  const userId = res.locals.user._id;
    const setting =  await getSetting({ user : userId })
    if(! setting){
      return res.status(403).send({ msg: "Setting not not found!"})
    } 
    return res.status(200).send(setting)
}

export async function updateSettingHandler(req: Request, res: Response) {
  const userId = res.locals.user._id;
  const settingId = req.params.settingId;
  const body =  req.body;
  const setting = await getOneSetting({ _id: settingId })
  if(!setting){
    return res.status(403).send({ msg: "setting not foung"})
  }
  if(String(setting.user) !== userId){
    return res.status(401).send({ msg: "Not allowed"})
  }
  const updateSetting = await findAndUpdateSetting({ _id: settingId }, { ...body }, { new: true })
  return res.send(updateSetting)
}

export async function deleteSettingsHandler(req: Request, res: Response){
  const settingsId = req.body.settingsId;
  settingsId.forEach((id:any) => {
     deleteSettings({ _id: id })
    });
    return res.status(200).send({ msg: "Deleted Successfully"})
}
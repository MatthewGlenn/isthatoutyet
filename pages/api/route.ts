import type { NextApiRequest, NextApiResponse } from 'next'
import { getGamesAmerica } from "nintendo-switch-eshop";
import { checkIfDatabaseLoaded, loadNintendoGamesFromEShop } from "@/actions/action";

type ResponseData = {
    message: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    const loaded = await checkIfDatabaseLoaded();
    if(!loaded) {
        const list = await getGamesAmerica();

        const ret = await loadNintendoGamesFromEShop(list);
        res.status(200).json({ message: `Loaded ${ret}` });
    }
    else {
        res.status(200).json({ message: `Already scrapped nintendo` })
    }

}
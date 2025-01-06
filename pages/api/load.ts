import type {NextApiRequest, NextApiResponse} from "next";
import {VideoGameObject, VideoGameObjects} from "@/lib/definitions";
import {loadDatafromScrapper, loadMultipleDatafromScrapper} from "@/actions/action";

type ResponseData = {
    message: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    if (req.method !== 'POST') {
        res.status(405).send({ message: 'Only POST requests allowed' })
        return;
    }

    const data = req.body;
    if (Array.isArray(data)) {
        const results = VideoGameObjects.safeParse(data);
        if (results.success) {
            await loadMultipleDatafromScrapper(results.data);
            res.status(200).send({message: 'accepted update'});
            return;
        } else if (!results.success) {
            res.status(400).send({message: 'Data is invalid ' + results.error.message});
            return;
        }
    }

    const result = VideoGameObject.safeParse(data);
    if(result.success) {
        await loadDatafromScrapper(result.data);
        res.status(200).send({message: 'accepted update'});
        return;
    }
    else {
        res.status(400).send({message: 'Data is invalid ' + result.error.message});
        return;
    }
}
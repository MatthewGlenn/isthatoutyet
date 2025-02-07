import type { NextApiRequest, NextApiResponse } from "next";
import { ReleaseObjects } from "@/lib/definitions";
import { loadReleaseDates } from "@/actions/action";

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

    const results = ReleaseObjects.safeParse(data);
    if (results.success) {
        const mappedResults = results.data.map(x=> {
            return {
                name: x.name,
                platform: x.platform,
                productType: x.productType,
                releaseDate: new Date(x.releaseDate)
            }
        });
        await loadReleaseDates(mappedResults);
        res.status(200).send({message: 'accepted update'});
        return;
    } else if (!results.success) {
        res.status(400).send({message: 'Data is invalid ' + results.error.message});
        return;
    }

}
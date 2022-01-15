import {NextApiRequest, NextApiResponse} from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if(req.method !== "GET") {
        return res.status(405).json({error: 'request of type GET not allowed'});
    }

    const versionInfo = await fetch(`http://localhost:3001/api/version_info`);

    return res.status(200).json(versionInfo);
}

export default handler;

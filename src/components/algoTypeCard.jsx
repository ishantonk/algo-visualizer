import { Card, CardHeader, CardBody, CardFooter, Typography } from "@material-tailwind/react";

import { Link } from "react-router-dom";

export default function AlgoTypeCard(algoType) {
    let { image, title, link, subAlgoList } = algoType.algoType;

    return (
        <Link to={link} className="group">
            <Card className="w-96 hover:scale-110 transition-all ease-in-out">
                <CardHeader color="gray" className="relative h-56">
                    <img
                        src={image}
                        alt="algo type"
                        className="overflow-hidden absolute top-0 left-0 w-full h-full object-cover group-hover:blur-sm"
                    />
                </CardHeader>
                <CardBody className="text-center">
                    <Typography variant="h5" id="algoTitle" className="mb-2">
                        {title}
                    </Typography>
                </CardBody>
                <CardFooter divider className="flex items-center justify-around py-3">
                    {subAlgoList.map((subAlgo, index) => (
                        <Typography
                            key={index}
                            as="li"
                            variant="small"
                            color="blue-gray"
                            className="p-1 font-light text-xs"
                        >
                            {subAlgo.title}
                        </Typography>
                    ))}
                </CardFooter>
            </Card>
        </Link>
    );
}
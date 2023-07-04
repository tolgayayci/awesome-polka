import { useEffect, useState} from "react";
import Airtable from "airtable";

import type { ApplicationProps } from "../types/types";

export function useCheckApplications() {

const [isLoading, setIsLoading] = useState(true);
const [applications, setApplications] = useState<Array<ApplicationProps | null>>([]);

Airtable.configure({
    endpointUrl: "https://api.airtable.com",
    apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_TOKEN,
});

const base = Airtable.base("appiNjkQe2Ey1SYet");

async function checkApplications() {
    base("Table 1")
        .select({
            view: "Grid view",
        })
        .eachPage(
            function page(records, fetchNextPage) {
                records.forEach(function (record) {
                    setApplications((prevApplications) => [
                        ...prevApplications,
                        {
                            username: record.get("username"),
                            projectName: record.get("projectName"),
                            walletAddress: record.get("walletAddress"),
                            email: record.get("email"),
                            projectBio: record.get("projectBio"),
                            dbStatus: record.get("dbStatus"),
                        } as ApplicationProps,
                    ]);
                });

                fetchNextPage();
            },
            function done(err) {
                setIsLoading(false);
                if (err) {
                    console.error(err);
                    return;
                }
            }
        );
}

useEffect(() => {
    checkApplications();
}, []);

// Log the updated applications state outside the checkApplications function or in a separate useEffect
useEffect(() => {
    console.log(applications);
}, [applications]);

    return { applications, isLoading};
}
      
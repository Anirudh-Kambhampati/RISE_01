// import React from "react"
// import { SidebarItems } from "./Sidebar"

export default
                
{
    module : "Resources",
    id: "root-0",
    children:[
        {
            id: "root-1",
            module: "Instruments",
            collapsed: true,
            children: [
                {
                    id: "0",
                    module: "SEM-1",
                    leaf: true
                },
                {
                    id: "1",
                    module: "SEM-2",
                    leaf: true
                }
            ]
        },
        {
            id: "root-2",
            module: "Storage",
            collapsed: true,
            children: [
                {
                    id: "2",
                    module: "AWS-S3 1",
                    leaf: true
                },
                {
                    id: "3",
                    module: "AWS-S3 2",
                    leaf: true
                }
            ]
        }
    ]
}

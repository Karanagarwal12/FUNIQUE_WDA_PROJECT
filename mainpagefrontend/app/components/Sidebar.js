import { useState } from "react"


export default function Sidebar({data}) {
    const [topInterests, setTopInterests] = useState([
        {
            name: "Foot Ball",
            id: "2326rg87y6r5897j"
        },
        {
            name: "Volleyball",
            id: "2326rg87y6r5897j"
        },
        {
            name: "Web Dev",
            id: "2326rg87y6r5897j"
        },
        {
            name: "Music",
            id: "2326rg87y6r5897j"
        }
    ])
    function handler(e){
        data.setInterest(e.target.innerHTML);
        data.setHeroCenter("interest");
    }
    return (
        <div className="sideBar">
            <div className="intrests">
                <h1>Interests</h1>
                <ul>
                    {topInterests.map((interest) => <li onClick={handler}>{interest.name}</li>)}
                </ul>
            </div>
            <div className="others">
                <h1>Community</h1>
                <h1>Explore</h1>
                <h1>Achievements</h1>
                <h1>About</h1>
            </div>
        </div>
    )
}
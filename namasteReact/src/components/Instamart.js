import {useState} from "react";

const Section = ({header,description, isVisible, setIsVisible}) =>{
    
    return(
        <div>
            <h1 className="font-bold text-lg">{header} </h1>
            {isVisible?
                <button className="bg-yellow-400 rounded  w-20 p-2 m-2"
                onClick={() => {
                    setIsVisible(false);
                }}>Hide</button>:
                <button className="bg-green-400 rounded w-20 p-2 m-2"
                onClick={() => {
                    setIsVisible(true);
                }}>Show</button>
            }
            {isVisible && <p>{description} </p>}

        </div>
    );
};

const Instamart = () =>{

    const [sectionConfig, setSectionConfig] = useState("about")
    return(
        <div>
            <Section 
            header = {"About Us"}
            description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
            isVisible = {sectionConfig=== "about"}
            setIsVisible = {() =>
            setSectionConfig({
                showAbout:true,
                showTeam: false,
                showCareers: false
            })}
        />

            <Section
                header="Team"
                description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
                isVisible = {sectionConfig === "team"}
                setIsVisible = {()=>
                setSectionConfig({
                    showAbout:false,
                    showTeam:true,
                    showCareers:false
                })}
            />

            <Section
                header="Careers"
                description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
                isVisible = {sectionConfig === "career"}
                setIsVisible = {() => 
                setSectionConfig({
                    showAbout:false,
                    showTeam:false,
                    showCareers:true,
                })}

            />

        </div>
    )
}

export default Instamart;
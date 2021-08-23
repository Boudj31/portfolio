import React from "react";

export default function SkillsData({ datas }) {

    return (
        <div>
            <dl>
                {datas.map( (data) => {
                    return (
                        <React.Fragment key={data.id}>
                                <div className="container mt-3">
                                        <div className="skills-group row p-2">
                                            <img  className="col-4" src={data.img} alt="i" width="40"/>
                                            <h3 className="col-4 mt-2"> {data.title}</h3>
                                        </div>
                                </div>
                        </React.Fragment>
                    )
                })}
            </dl>
        </div>
    )
}
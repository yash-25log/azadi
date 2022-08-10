import React from 'react'

export default function Events() {
    return (
        <div style={{
            backgroundColor: "cyan"
        }}>
            <h1
                className="eventHead"
                style={{
                paddingTop: "60px",
                textAlign: "center",
                color: "black",
                fontSize: "40px",
                }}
            >
                O U R  &nbsp; U P C O M I N G &nbsp;  E V E N T S
            </h1>
            <div style={{
                display: "flex",
                // marginLeft: "180px",
                justifyContent: "center",
                // width: "00px",
                // marginRight: "100px",
                flexWrap: "wrap",
            }}>
                <div className="serviceCard">
                    <img style={{
                        // display: "flex",
                        borderRadius: "10px 10px 0px 0px",
                        width: "350px",
                        height: "280px",
                        margin: "30px"
                    }}
                    src={"img.jpg"}
                    alt=""
                    />
                </div>
                <div className="serviceCard">
                    <img style={{
                        borderRadius: "10px 10px 0px 0px",
                        width: "350px",
                        height: "280px",
                        margin: "30px"
                    }}
                    src={"img1.png"}
                    alt=""
                    />
                </div>
                <div className="serviceCard">
                    <img style={{
                        borderRadius: "10px 10px 0px 0px",
                        width: "350px",
                        height: "280px",
                        margin: "30px"
                    }}
                    src={"img2.png"}
                    alt=""
                    />
                </div>

            </div>

        </div>
    )
}

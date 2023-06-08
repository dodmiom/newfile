import React from 'react'



export default function Footer({col,tog,clicktoggle}) {
    const a="16px"
    return (
        <>
            <div className={` bg-${tog}`} style={{position:"relative",width:"1700px",top:"750px",width:"100%",borderTop:"1px solid black"}}>
                <div className='row'>
                    <div className="col-md-1 col-lg-2 col-xl-4 mx-auto mb-4 " >

                        <h6 style={{ color: "#dec30d", fontSize: "25px" }} className="text-uppercase fw-bold mb-1 ">
                            Calet
                        </h6>
                        <p className={`text-reset text-${col}`} style={{ fontSize: a, wordWrap: "break-word", wordSpacing: "1px", fontStyle: "inherit", height: "60px", width: "280px" }}>is simply dummy text of the printing and typesetting industry Lorem Ipsum</p>
                    </div>
                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                        <h6 className={`text-uppercase text-${col} fw-bold mb-4`}>
                            EXPLORE
                        </h6>
                        <p style={{ fontWeight: "bold", color: "#9e9ea5" }}>
                            <a href="#!" style={{ textDecoration: "none" }} className="text-reset">SUPPORTS</a>
                        </p>
                        <p style={{ fontWeight: "bold", color: "#9e9ea5" }}>
                            <a href="#!" style={{ textDecoration: "none" }} className="text-reset">ABOUT US</a>
                        </p>
                        <p style={{ fontWeight: "bold", color: "#9e9ea5" }}>
                            <a href="#!" style={{ textDecoration: "none" }} className="text-reset">BLOG</a>
                        </p>

                    </div>

                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                        <h6 className={`text-uppercase text-${col} fw-bold mb-4`}>
                            LEGAL
                        </h6>
                        <p style={{ fontWeight: "bold", color: "#9e9ea5" }}>
                            <a href="#!" style={{ textDecoration: "none" }} className="text-reset">TERMS OF USE</a>
                        </p>
                        <p style={{ fontWeight: "bold", color: "#9e9ea5" }}>
                            <a href="#!" style={{ textDecoration: "none" }} className="text-reset">PRIVACY POLICY</a>
                        </p>

                    </div>

                    <div className="col-md-4 col-lg-2 col-xl-2 mx-auto mb-4">

                        <h6 className={`text-uppercase text-${col} fw-bold mb-4`}>
                            SOCIALS
                        </h6>
                        <p style={{ fontWeight: "bold", color: "#9e9ea5" }}>
                            <a style={{ textDecoration: "none" }} href="#!" className="text-reset"><i className="bi bi-twitter mx-1 " style={{ color: "teal", fontSize: "17px" }}></i>   TWITTER</a>
                        </p>
                        <p style={{ fontWeight: "bold", color: "#9e9ea5" }}>
                            <a style={{ textDecoration: "none" }} href="#!" className="text-reset"><i className="bi bi-linkedin mx-1" style={{ color: "teal", fontSize: "18px" }}></i>  LINKEDIN</a>
                        </p>
                        <p style={{ fontWeight: "bold", color: "#9e9ea5" }}>
                            <a style={{ textDecoration: "none" }} href="#!" className="text-reset"><i className="bi bi-instagram mx-1" style={{ color: "teal", fontSize: "18px" }}></i> INSTAGRAM</a>
                        </p>


                    </div>

                </div>

            </div>
        </>
    )
}

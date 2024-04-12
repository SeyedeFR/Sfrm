export default function function1() {
    const body ={
        backgroundColor: "rgba(221, 221, 221, 0.699)",
        fontFamily: "Arial",
        display: "flex",
        justifyContent:" center",
    }
    const mystyle ={
        liststyleType: "none",
        padding: "0",
        margin: "0",
        backgroundColor: "rgb(53, 48, 48)",
        textAlign: "center",
        height: "40px",
    }
    const header ={
        color: "white",
        backgroundColor: "rgb(33, 30, 30)",
        height: "30px",
        textAlign: "center",
        fontSize: "30px",
        padding: "20px",
        lineHeight: "30px",
        marginBottom: "0",
    }
    const list={
        display: "inline",
        padding: "34px",
        float: "center",
        fontSize: "20px",
        lineHeight: "35px",
        color: "white",
    }
    const box1 = {
        gridArea: "A",
        border:"1px solid rgb(205, 203, 203)",
        background:" url(http://ahrargroup.com/posts/download/2347/ahrargroup-2347.jpg)",
        borderRadius: "5px",
        height: "180px",
        color: "white",
        marginTop: "7px",
        display: "grid",
        placeItems: "center",
        boxShadow: "1px 1px 5px gray",
    }
    const box2 ={
        gridArea: "B",
        backgroundColor: "white",
        height: "170px",
        borderRadius: "5px",
        boxShadow: "1px 1px 5px gray",
    }
const h3 ={
    fontSize: "18px",
    paddingLeft: "17px",
    paddingTop: "20px",
    margin: "0",
}
const p ={
    fontSize: "13px",
    padding: "0 15px",
}
const footer ={
    color: "white",
    backgroundColor: "rgb(33, 30, 30)",
    height: "23px",
    textAlign: "center",
    padding: "25px",
    lineHeight: "22px",
    marginTop: "10px",
}
const box3= {
    gridArea: "C",
    backgroundColor: "white",
    height: "130px",
    border: "1px solid rgb(205, 203, 203)",
    borderRadius: "7px",
    marginTop: "20px",
    boxShadow: "1px 1px 5px gray",

}
const BOX ={
    display: "grid",
    float: "left",
    width: "31%",
    backgroundColor: "rgb(219, 219, 219)",
    height: "100px",
    borderRadius: "5px",
    marginRight: "15px",
}
const BOXP2 = {
    float: "left",
    width: '47%',
    backgroundColor: "rgb(219, 219, 219)",
    borderRadius: "5px",
    margin: "10px",
}
const h1 = {
    fontSize:"40px",
}
const pclass= {
        fontSize: "18px",
        marginTop: "0",
        fontFamily: "'Times New Roman', Times, serif",

}
const hr ={
    width:" 95%",
}
const contain={
    width:" 68%",
}
const container ={
    gap: "8px",
    display: "grid",
//     gridtemplateAreas:
// ""A A A A  A A A A  A A A A"
//         "B B B B  B B B B  B B B B"
//         "C C C C  C C C C  C C C C""
}
const a= {
        color: "white",
        textDecoration:" none",
}

    return (
        <div style={body}>
        <div style={contain}>
        <h1 style={header}> Welcome to My Advanced Web Page</h1>
        <ul style={mystyle}>
            <li style={list}> <a href="#Home" style={a}>Home</a></li>
            <li style={list}> <a href="#About"  style={a}>About</a></li>
            <li style={list}> <a href="#Service" style={a}>Service</a></li>
            <li style={list}> <a href="#Contact" style={a}>Contact</a></li>
        </ul>
        <div style={container}>
            <div style={box1}>
                <h1 style={h1}> Welcome to our website</h1>
                <p style={pclass}>This site is advertising.</p>
            </div>

            <div style={box2}>
                <h3 style={h3}>Feature Content</h3>
                <hr style={hr}></hr>
                <div style={BOX}>
                    <h3 style={h3}>Web Design </h3>
                    <p style={p}>Explore our creative and user-friendly web design solutions.</p>
                </div>
                <div style={BOX}>
                    <h3 style={h3}>Developement</h3>
                    <p style={p}>Discover cutting-edge web Developement technologies and practices.</p>
                </div>
                <div style={BOX}>
                    <h3 style={h3}>SEO</h3>
                    <p style={p}>Optimize our website for search engines and improve visibility. </p>
                </div>
            </div>

            <div style={box3}>
                <div style={BOXP2}>
                    <h3 style={h3}>Client Testimonial 1</h3>
                    <hr style={hr}></hr>
                    <p style={p}>"The team deliverd a fantastic website that exceeded our expecations. Highly recomended."</p>
                </div>
                <div style={BOXP2}>
                    <h3 style={h3}>Client Testimonial 2</h3>
                    <hr style={hr}></hr>
                    <p style={p}>"Professionalism. attention to detail, and creatively define this team. We are thrilled with
                        result."</p>
                </div>
            </div>
        </div>

        <footer style={footer}>&copy; 2023 Advanced Web Page</footer>
    </div>
    </div>
    )
}



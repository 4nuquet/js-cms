class Sidebar{

    getLinks(){
        const links = [
            {
                name: "Dashboard",
                path: "/",
                icon: "dashboard"
            },
            {
                name: "About",
                path: "/about",
                icon: "info"
            }
        ]

        return links;
    }

}

export default Sidebar;
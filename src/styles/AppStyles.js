export const songListStyle = {
    container: {
        fontFamily: "calibri"
    },

    headers: {
        display: 'grid',
        gridTemplateColumns: "40% 45% 15%",
        backgroundColor: "lightgray",
        padding: 10,
        alignItems: "center"
    },

    tableDataEven: {
        display: 'grid',
        gridTemplateColumns: "40% 45% 15%",
        padding: 10,
        backgroundColor: "#fff"
    },

    tableDataOdd: {
        display: 'grid',
        gridTemplateColumns: "40% 45% 15%",
        padding: 10,
        backgroundColor: "#f3f3f3"
    },

    durationPosition: {
        textAlign: "right",
    },

};

export const modalStyle = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        justifyContent: "flex-end",
        fontFamily: "calibri",
    },

    songData: {
        flexDirection: "column"
    },

    title: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "baseline"
    },

    button: {
        border: 0,
        background: "none",
        fontSize: 15,
        padding: 5,
        color: "gray",
        fontWeight: "bold"
    },

    h3: {
        textAlign: "right"
    },

    p: {
        textAlign: "right",
        fontStyle: "italic"
    }

};
// Dependencies
let express = require("express");
let path = require("path");

// Sets up the Express App
let app = express();
let PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Table data3
reservations = [];
// let reservations = [{
//     routeName: "",
//     name: "",
//     phoneNum: "",
//     email: "",
//     id:"",
// }
// ]

// Routes
app.get("/", function (req, res) {
    console.log("home page request!!");
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reserve", function (req, res) {
    console.log("reservation page request");
    res.sendFile(path.join(__dirname, "setreservations.html"));
});

app.get("/tables", function (req, res) {
    console.log("tables page request");
    res.sendFile(path.join(__dirname, "getreservations.html"));
});


// New Reservations
app.post("/api/newtable", function (req, res) {
    console.log("new reservation!");
    newTable = req.body;
    reservations.push(newTable);

    console.log(newTable);
    if (reservations.length < 6) {
        res.send(true);
    } else {
        res.send(false);
    }
});

// Return reservations to client
app.get("/api/gettables", function (req, res) {
    res.json(reservations);
});

app.listen(PORT, function () {
    console.log("App listening to PORT " + PORT);
});
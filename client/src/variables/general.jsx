// ##############################
// // // tasks list for Tasks card in Dashboard view
// #############################

const tasks = [
    {checked: true, text: 'Sign contract for "What are conference organizers afraid of?"'},
    {checked: false, text: 'Lines From Great Russian Literature? Or E-mails From My Boss?'},
    {checked: true, text: 'Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit'}
];

// ##############################
// // // table head data and table body data for Tables view
// #############################

const thead = [
    "Name", "Country", "City", "Salary"
];
const tbody = [
    { className:"table-success", data: [ "Dakota Rice" , "Niger" , "Oud-Turnhout" , "$36,738" ] },
    { className:"", data: [ "Minerva Hooper" , "Curaçao" , "Sinaai-Waas" , "$23,789" ] },
    { className:"table-info", data: [ "Sage Rodriguez" , "Netherlands" , "Baileux" , "$56,142" ] },
    { className:"", data: [ "Philip Chaney" , "Korea, South" , "Overland Park" , "$38,735" ] },
    { className:"table-danger", data: [ "Doris Greene" , "Malawi" , "Feldkirchen in Kärnten" , "$63,542" ] },
    { className:"", data: [ "Mason Porter" , "Chile" , "Gloucester" , "$78,615" ] },
    { className:"table-warning", data: [ "Jon Porter" , "Portugal" , "Gloucester" , "$98,615" ] }
];

// ##############################
// // // table head data and table body data for Tables view
// #############################

const user_thead = [
    "FirstName", "LastName", "Email", "Password"
];
const user_tbody = [
    { className:"table-success", data: [ "Dakota" , "Niger" , "Oud-Turnhout" , "36,738" ] },
    { className:"", data: [ "Hooper" , "Curaçao" , "Sinaai-Waas" , "23,789" ] },
    { className:"table-info", data: [ "Rodriguez" , "Netherlands" , "Baileux" , "56,142" ] },
    { className:"", data: [ "Philip" , "Korea, South" , "Overland Park" , "38,735" ] },
    { className:"table-danger", data: [ "Doris" , "Malawi" , " Kärnten" , "63,542" ] },
    { className:"", data: [ "Mason Porter" , "Chile" , "Gloucester" , "78,615" ] },
    { className:"table-warning", data: [ "Jon" , "Portugal" , "Gloucester" , "98,615" ] }
];

// ##############################
// // // table head data and table body data for Tables view
// #############################

const data_thead = [
    "Year", "Week", "Month", "Electricity Euro", "Electricity KWH", "Heating Euro", "Heating KWH", "Water Euro", "Water Litres"
];
const data_tbody = [
    { className:"table-success", data: [ "2018" , "24" , "April" , "$45,492" , "34,789" , "$36,738" , "34,789", "$45,492" , "34,789" ] },
    { className:"", data: [ "2018" , "24" , "April" , "$45,492" , "34,789" , "$36,738" , "34,789", "$45,492" , "34,789" ] },
    { className:"table-info", data: [ "2018" , "24" , "April" , "$45,492" , "34,789" , "$36,738" , "34,789", "$45,492" , "34,789" ] },
    { className:"", data: [ "2018" , "24" , "April" , "$45,492" , "34,789" , "$36,738" , "34,789", "$45,492" , "34,789" ] },
    { className:"table-danger", data: [ "2018" , "24" , "April" , "$45,492" , "34,789" , "$36,738" , "34,789", "$45,492" , "34,789" ] },
    { className:"", data: [ "2018" , "24" , "April" , "$45,492" , "34,789" , "$36,738" , "34,789", "$45,492" , "34,789" ] },
    { className:"table-warning", data: [ "2018" , "24" , "April" , "$45,492" , "34,789" , "$36,738" , "34,789", "$45,492" , "34,789" ] }
];
export {
    tasks, // tasks list for Tasks card in Dashboard view
    thead, // data for <thead> of table in TableList view
    tbody, // data for <tbody> of table in TableList view
    user_thead, // data for <thead> of table in TableList view
    user_tbody, // data for <tbody> of table in TableList view
    data_thead, // data for <thead> of table in TableList view
    data_tbody, // data for <tbody> of table in TableList view
};

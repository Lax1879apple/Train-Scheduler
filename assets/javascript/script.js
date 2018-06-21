
  // Initialize Firebase

 var config = {
  apiKey: "AIzaSyB126tzv0FAGtuMFbffAKN8xbWuLKuNkKw",
  authDomain: "trainschedule-77f4e.firebaseapp.com",
  databaseURL: "https://trainschedule-77f4e.firebaseio.com",
  projectId: "trainschedule-77f4e",
  storageBucket: "trainschedule-77f4e.appspot.com",
  messagingSenderId: "393796393474"
};
 firebase.initializeApp(config);

  var trainData = firebase.database();
  console.log(trainData);
   
  // on click function
  $("#search-train").on("click", function(event){
    event.preventDefault();                       // action goes here! value grabbed from the test.

    var trainName = $("#trainName").val().trim();
    var destination = $("#destination").val().trim();
    var frequency = $("#trainFrequency").val().trim();
    var nextArrival = $("#trainTime").val().trim();
    var nextTrain = $("#nextTrain").val().trim();
    // code haldling the push
    var newTrain = {
      trnName: trainName,
      dstn: destination,
      frqncy: frequency,
      nxtArvl: nextArrival,
      nxtTrain: nextTrain,
      
    };
    // uploading data to trainData
    trainData.ref().push(newTrain);

    console.log (newTrain.trnName);
    console.log (newTrain.dstn);
    console.log (newTrain.frqncy);
    console.log (newTrain.nxtArvl);
    console.log (newTrain.nxtTrain);
  

    // Alert user 
    alert("train search successfully added, please click ok to go further");
   
   // Clears all of the text-boxes
    $("#train-name").val("");
    $("#final-point").val("");
    $("#train-frequency").val("");
    $("#train-arrival").val("");
    $("#next-arrival").val("");
  });

  // 3. Create Firebase event for adding employee to the database and a row in the html when a user adds an entry
  trainData.ref().on("child_added", function(childSnapshot, prevChildKey) {

    console.log(childSnapshot.val());

    var trainName = childSnapshot.val().trnName;
    var destination = childSnapshot.val().dstn;
    var frequency = childSnapshot.val().frqncy;
    var nextArrival = childSnapshot.val().nxtArvl;
    var nextTrain = childSnapshot.val().nxtTrain;
    // console new train info
    console.log(trainName);
    console.log(destination);
    console.log(frequency);
    console.log(nextArrival);
    console.log(nextTrain);

  // Add each train search data into the table
  $("#train-table > tbody").append("<tr><td>" + trainName + "</td><td>" + destination + "</td><td>" +
  frequency + "</td><td>" + nextArrival + "</td><td>" + nextTrain + "</td></tr>");

 });
  

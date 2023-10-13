//jshint esversion6
exports.getDate=  function()  {
  const today = new Date();
  let curentday = today.getDay();

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };
      return  today.toLocaleDateString("en-us", options);

};


exports.getDay = function() {
  const today = new Date();
  let curentday = today.getDay();

  const options = {
    weekday: "long"
};
    return  today.toLocaleDateString("en-us", options);
};

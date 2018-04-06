import $ from 'jquery';

const saveData = (person, url) => {
  $.ajax({
    type: 'POST',
    url,
    data: JSON.stringify(person),
    contentType: 'application/json',
    success: (person) => {
      console.log(person);
    },
    error: (err) => {
      console.log(err)
    }
  });
};
export default saveData;

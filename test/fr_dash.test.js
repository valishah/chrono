var chrono = require('../src/chrono');

test("Test - Should handle FR dayname mm-dd-yy", function() {
  var text = "Vendredi 12-30-16";
  var results = chrono.strict.parse(text, new Date(2012,7,10));
  expect(results.length).toBe(1)
});

test("Test - Should handle FR mm-dd-yy", function() {
  var text = "12-30-16";
  var results = chrono.strict.parse(text, new Date(2012,7,10));
  expect(results.length).toBe(1)
});


test("Test - Should handle FR dayname dd-mm-yy", function() {
  var text = "Vendredi 30-12-16";
  var results = chrono.strict.parse(text, new Date(2012,7,10));
  expect(results.length).toBe(1)
});

test("Test - Should handle FR dd-mm-yy", function() {
  var text = "30-12-16";
  var results = chrono.strict.parse(text, new Date(2012,7,10));
  expect(results.length).toBe(1)
});

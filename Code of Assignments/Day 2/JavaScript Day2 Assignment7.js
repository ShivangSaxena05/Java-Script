function count(a="Hello! How are you?") {
  let vowelCount = 0;
  for (let i = 0; i < a.length; i++) {
      if (
          a[i] == 'a' ||
          a[i] == 'e' ||
          a[i] == 'i' ||
          a[i] == 'o' ||
          a[i] == 'u'
      ){
          vowelCount++;
      }
  }
  console.log(vowelCount)
}
count()

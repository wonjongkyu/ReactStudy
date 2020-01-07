const fs = require('fs')

// a.txt를 읽어 들입니다.
fs.readFile('a.txt', 'utf-8', function (err, data) {
  console.log('a.txt를 읽어 들였습니다.', data)
  // b.txt를 읽어 들입니다.
  fs.readFile('a2.txt', 'utf-8', function (err, data) {
    console.log('a2.txt를 읽어 들였습니다.', data)
    // c.txt를 읽어 들입니다.
    fs.readFile('a3.txt', 'utf-8', function (err, data){
      console.log('a3.txt를 읽어 들였습니다.', data)
    })
  })
})

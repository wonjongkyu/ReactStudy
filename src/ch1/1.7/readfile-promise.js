const fs = require('fs')

// Promise를 반환하는 함수를 정의합니다.
function readFile_pr (fname){
  return new Promise((resolve) => {
      fs.readFile(fname, 'utf-8', (err, s) => {
        resolve(s)
    })
  })
}

// 차례대로 텍스트 파일을 읽어 들입니다.
readFile_pr('a.txt')
.then((text) => {
  console.log('a.txt를 읽어 들였습니다.', text)
  return readFile_pr('a2.txt')
})
.then((text) => {
  console.log('a2.txt를 읽어 들였습니다.', text)
  return readFile_pr('a3.txt')
})
.then((text) => {
  console.log('a3.txt를 읽어 들였습니다.', text)
})

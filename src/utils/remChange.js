//设置rem  的适配值
export function remChange() {
  const html = document.querySelector('html')
  const width = html.getBoundingClientRect().width
  html.style.fontSize = width/3.75 + 'px'
  console.log(html.style.fontSize)
}


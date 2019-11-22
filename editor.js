class Editor {
  constructor(output, inputHtml, inputCss, inputJs){
    this.output = output;

    this.inputHtml = inputHtml;
    this.inputCss = inputCss;
    this.inputJs = inputJs;
  }
  switchView(to){
    if (to == "HTML"){
      document.getElementById(this.inputHtml).style.display = "block";
      document.getElementById(this.inputCss).style.display = "none";
      document.getElementById(this.inputJs).style.display = "none";
    }
    else if (to == "CSS"){
      document.getElementById(this.inputHtml).style.display = "none";
      document.getElementById(this.inputCss).style.display = "block";
      document.getElementById(this.inputJs).style.display = "none";
    }
    else if (to == "JS"){
      document.getElementById(this.inputHtml).style.display = "none";
      document.getElementById(this.inputCss).style.display = "none";
      document.getElementById(this.inputJs).style.display = "block";
    }
  }
  run(add){
    let code = add + "<style>" + document.getElementById(this.inputCss).value + "</style>" + "<script>" + document.getElementById(this.inputJs).value + "</script>" + document.getElementById(this.inputHtml).value;
    let output = document.getElementById(this.output).contentWindow.document;
    output.open();
    output.writeln(code);
    output.close();
  }
  settings(obj, bar){
    document.getElementById(bar).classList.toggle('hidden');
    obj.classList.toggle('fa-spin')
  }
  theme(obj, main){
    document.getElementById(main).classList.toggle('dark');
    obj.classList.toggle("flip")
  }
  rotation(obj, main, sub){
    document.getElementById(main).classList.toggle('stack');
    document.getElementById(sub).classList.toggle('stack');
    document.getElementById(this.output).classList.toggle('stack');
    obj.classList.toggle("flip-quarter")
  }
  add(js, css){
    let jsCode = document.getElementById(js).value;
    let cssCode = document.getElementById(css).value;
    let returned
    if (jsCode != 'none' & jsCode != 'all'){
      returned = '<script src="../' + jsCode + '"></script>';
    } else if (jsCode == 'all') {
      returned = '<script src="../editor.js"></script><script src="../poductDescriptions.js"></script><script src="../scripts.js"></script>'
    } else {
      returned = ''
    }
    if (cssCode != 'none' & cssCode != 'all'){
      returned += '<link href="../css/' + cssCode + '" rel="stylesheet" type="text/css" />';
    } else if (cssCode == 'all') {
      returned += '<link href="../css/editor.css" rel="stylesheet" type="text/css" /><link href="../css/inputs.css" rel="stylesheet" type="text/css" /><link href="../css/links.css" rel="stylesheet" type="text/css" /><link href="../css/style.css" rel="stylesheet" type="text/css" />'
    } else {
      returned += ''
    }
    return returned;
  }
}
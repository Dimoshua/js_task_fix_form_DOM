function e(e){var t=e.replace(/([A-Z])/g," $1");return t.charAt(0).toUpperCase()+t.slice(1).toLowerCase()}document.querySelectorAll("input").forEach(function(t){var a=document.createElement("label");a.className="field-label",a.setAttribute("for",t.id),a.textContent=e(t.name),t.placeholder=e(t.name),t.parentElement.append(a)});
//# sourceMappingURL=index.dade4762.js.map

(function(p,g,h){"use strict";const a=/https?:\/\/.*\/emojis\/([0-9]+).(webp|png|gif)\?.*/,j=g.ReactNative.NativeModules.DCDChatManager,b=h.before("updateRows",j,function(d){const y=d[1];let l=JSON.parse(y),f=[];for(let r=0;r<l.length;r++){let t=l[r];try{if(t.type==1){let u=!1;if(t.message.content)for(let c=0;c<t.message.content.length;c++){u=!0;let e=t.message.content[c];if(e.type=="link"){const o=e.target;if(a.exec(o)?.length){let m=a.exec(o),[w,n,s]=m;s=="gif"&&(t.message.animateEmoji=!0),e.type="customEmoji",e.id=n,e.src="https://cdn.discordapp.com/emojis/"+n+"."+s+"?size=160",e.frozenSrc="https://cdn.discordapp.com/emojis/"+n+"."+s+"?size=160",s=="gif"&&(e.frozenSrc="https://cdn.discordapp.com/emojis/"+n+".webp?size=160"),e.alt="unknown"}}}let i=t.message.embeds;if(i){if(!u)for(let e=0;e<i.length;e++){const o=i[e];if(o.type=="image"&&o.url){let m=a.exec(o.url),[w,n,s]=m;s=="gif"?(t.message.animateEmoji=!0,t.message.content.push({id:n,alt:"unknown",src:"https://cdn.discordapp.com/emojis/"+n+"."+s+"?size=160",frozenSrc:"https://cdn.discordapp.com/emojis/"+n+".webp?size=160",jumboable:!0,type:"customEmoji"})):t.message.content.push({id:n,alt:"unknown",src:"https://cdn.discordapp.com/emojis/"+n+"."+s,frozenSrc:"https://cdn.discordapp.com/emojis/"+n+"."+s,jumboable:!0,type:"customEmoji"})}}let c=i.slice(0);i.forEach(function(e){if(e.url&&a.exec(e.url)?.length){const o=c.findIndex(function(m){return m.url==e.url});c.splice(o,1)}}),t.message.embeds=c}}}catch{}f.push(t)}d[1]=JSON.stringify(f)}),z=function(){return b()};return p.onUnload=z,p})({},vendetta.metro.common,vendetta.patcher);
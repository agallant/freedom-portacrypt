!function(a){"use strict";function b(a,b,c,d){a[b]=c>>24&255,a[b+1]=c>>16&255,a[b+2]=c>>8&255,a[b+3]=255&c,a[b+4]=d>>24&255,a[b+5]=d>>16&255,a[b+6]=d>>8&255,a[b+7]=255&d}function c(a,b,c,d,e){var f,g=0;for(f=0;e>f;f++)g|=a[b+f]^c[d+f];return(1&g-1>>>8)-1}function d(a,b,d,e){return c(a,b,d,e,16)}function e(a,b,d,e){return c(a,b,d,e,32)}function f(a,b,c,d){for(var e,f=255&d[0]|(255&d[1])<<8|(255&d[2])<<16|(255&d[3])<<24,g=255&c[0]|(255&c[1])<<8|(255&c[2])<<16|(255&c[3])<<24,h=255&c[4]|(255&c[5])<<8|(255&c[6])<<16|(255&c[7])<<24,i=255&c[8]|(255&c[9])<<8|(255&c[10])<<16|(255&c[11])<<24,j=255&c[12]|(255&c[13])<<8|(255&c[14])<<16|(255&c[15])<<24,k=255&d[4]|(255&d[5])<<8|(255&d[6])<<16|(255&d[7])<<24,l=255&b[0]|(255&b[1])<<8|(255&b[2])<<16|(255&b[3])<<24,m=255&b[4]|(255&b[5])<<8|(255&b[6])<<16|(255&b[7])<<24,n=255&b[8]|(255&b[9])<<8|(255&b[10])<<16|(255&b[11])<<24,o=255&b[12]|(255&b[13])<<8|(255&b[14])<<16|(255&b[15])<<24,p=255&d[8]|(255&d[9])<<8|(255&d[10])<<16|(255&d[11])<<24,q=255&c[16]|(255&c[17])<<8|(255&c[18])<<16|(255&c[19])<<24,r=255&c[20]|(255&c[21])<<8|(255&c[22])<<16|(255&c[23])<<24,s=255&c[24]|(255&c[25])<<8|(255&c[26])<<16|(255&c[27])<<24,t=255&c[28]|(255&c[29])<<8|(255&c[30])<<16|(255&c[31])<<24,u=255&d[12]|(255&d[13])<<8|(255&d[14])<<16|(255&d[15])<<24,v=f,w=g,x=h,y=i,z=j,A=k,B=l,C=m,D=n,E=o,F=p,G=q,H=r,I=s,J=t,K=u,L=0;20>L;L+=2)e=v+H|0,z^=e<<7|e>>>25,e=z+v|0,D^=e<<9|e>>>23,e=D+z|0,H^=e<<13|e>>>19,e=H+D|0,v^=e<<18|e>>>14,e=A+w|0,E^=e<<7|e>>>25,e=E+A|0,I^=e<<9|e>>>23,e=I+E|0,w^=e<<13|e>>>19,e=w+I|0,A^=e<<18|e>>>14,e=F+B|0,J^=e<<7|e>>>25,e=J+F|0,x^=e<<9|e>>>23,e=x+J|0,B^=e<<13|e>>>19,e=B+x|0,F^=e<<18|e>>>14,e=K+G|0,y^=e<<7|e>>>25,e=y+K|0,C^=e<<9|e>>>23,e=C+y|0,G^=e<<13|e>>>19,e=G+C|0,K^=e<<18|e>>>14,e=v+y|0,w^=e<<7|e>>>25,e=w+v|0,x^=e<<9|e>>>23,e=x+w|0,y^=e<<13|e>>>19,e=y+x|0,v^=e<<18|e>>>14,e=A+z|0,B^=e<<7|e>>>25,e=B+A|0,C^=e<<9|e>>>23,e=C+B|0,z^=e<<13|e>>>19,e=z+C|0,A^=e<<18|e>>>14,e=F+E|0,G^=e<<7|e>>>25,e=G+F|0,D^=e<<9|e>>>23,e=D+G|0,E^=e<<13|e>>>19,e=E+D|0,F^=e<<18|e>>>14,e=K+J|0,H^=e<<7|e>>>25,e=H+K|0,I^=e<<9|e>>>23,e=I+H|0,J^=e<<13|e>>>19,e=J+I|0,K^=e<<18|e>>>14;v=v+f|0,w=w+g|0,x=x+h|0,y=y+i|0,z=z+j|0,A=A+k|0,B=B+l|0,C=C+m|0,D=D+n|0,E=E+o|0,F=F+p|0,G=G+q|0,H=H+r|0,I=I+s|0,J=J+t|0,K=K+u|0,a[0]=v>>>0&255,a[1]=v>>>8&255,a[2]=v>>>16&255,a[3]=v>>>24&255,a[4]=w>>>0&255,a[5]=w>>>8&255,a[6]=w>>>16&255,a[7]=w>>>24&255,a[8]=x>>>0&255,a[9]=x>>>8&255,a[10]=x>>>16&255,a[11]=x>>>24&255,a[12]=y>>>0&255,a[13]=y>>>8&255,a[14]=y>>>16&255,a[15]=y>>>24&255,a[16]=z>>>0&255,a[17]=z>>>8&255,a[18]=z>>>16&255,a[19]=z>>>24&255,a[20]=A>>>0&255,a[21]=A>>>8&255,a[22]=A>>>16&255,a[23]=A>>>24&255,a[24]=B>>>0&255,a[25]=B>>>8&255,a[26]=B>>>16&255,a[27]=B>>>24&255,a[28]=C>>>0&255,a[29]=C>>>8&255,a[30]=C>>>16&255,a[31]=C>>>24&255,a[32]=D>>>0&255,a[33]=D>>>8&255,a[34]=D>>>16&255,a[35]=D>>>24&255,a[36]=E>>>0&255,a[37]=E>>>8&255,a[38]=E>>>16&255,a[39]=E>>>24&255,a[40]=F>>>0&255,a[41]=F>>>8&255,a[42]=F>>>16&255,a[43]=F>>>24&255,a[44]=G>>>0&255,a[45]=G>>>8&255,a[46]=G>>>16&255,a[47]=G>>>24&255,a[48]=H>>>0&255,a[49]=H>>>8&255,a[50]=H>>>16&255,a[51]=H>>>24&255,a[52]=I>>>0&255,a[53]=I>>>8&255,a[54]=I>>>16&255,a[55]=I>>>24&255,a[56]=J>>>0&255,a[57]=J>>>8&255,a[58]=J>>>16&255,a[59]=J>>>24&255,a[60]=K>>>0&255,a[61]=K>>>8&255,a[62]=K>>>16&255,a[63]=K>>>24&255}function g(a,b,c,d){for(var e,f=255&d[0]|(255&d[1])<<8|(255&d[2])<<16|(255&d[3])<<24,g=255&c[0]|(255&c[1])<<8|(255&c[2])<<16|(255&c[3])<<24,h=255&c[4]|(255&c[5])<<8|(255&c[6])<<16|(255&c[7])<<24,i=255&c[8]|(255&c[9])<<8|(255&c[10])<<16|(255&c[11])<<24,j=255&c[12]|(255&c[13])<<8|(255&c[14])<<16|(255&c[15])<<24,k=255&d[4]|(255&d[5])<<8|(255&d[6])<<16|(255&d[7])<<24,l=255&b[0]|(255&b[1])<<8|(255&b[2])<<16|(255&b[3])<<24,m=255&b[4]|(255&b[5])<<8|(255&b[6])<<16|(255&b[7])<<24,n=255&b[8]|(255&b[9])<<8|(255&b[10])<<16|(255&b[11])<<24,o=255&b[12]|(255&b[13])<<8|(255&b[14])<<16|(255&b[15])<<24,p=255&d[8]|(255&d[9])<<8|(255&d[10])<<16|(255&d[11])<<24,q=255&c[16]|(255&c[17])<<8|(255&c[18])<<16|(255&c[19])<<24,r=255&c[20]|(255&c[21])<<8|(255&c[22])<<16|(255&c[23])<<24,s=255&c[24]|(255&c[25])<<8|(255&c[26])<<16|(255&c[27])<<24,t=255&c[28]|(255&c[29])<<8|(255&c[30])<<16|(255&c[31])<<24,u=255&d[12]|(255&d[13])<<8|(255&d[14])<<16|(255&d[15])<<24,v=f,w=g,x=h,y=i,z=j,A=k,B=l,C=m,D=n,E=o,F=p,G=q,H=r,I=s,J=t,K=u,L=0;20>L;L+=2)e=v+H|0,z^=e<<7|e>>>25,e=z+v|0,D^=e<<9|e>>>23,e=D+z|0,H^=e<<13|e>>>19,e=H+D|0,v^=e<<18|e>>>14,e=A+w|0,E^=e<<7|e>>>25,e=E+A|0,I^=e<<9|e>>>23,e=I+E|0,w^=e<<13|e>>>19,e=w+I|0,A^=e<<18|e>>>14,e=F+B|0,J^=e<<7|e>>>25,e=J+F|0,x^=e<<9|e>>>23,e=x+J|0,B^=e<<13|e>>>19,e=B+x|0,F^=e<<18|e>>>14,e=K+G|0,y^=e<<7|e>>>25,e=y+K|0,C^=e<<9|e>>>23,e=C+y|0,G^=e<<13|e>>>19,e=G+C|0,K^=e<<18|e>>>14,e=v+y|0,w^=e<<7|e>>>25,e=w+v|0,x^=e<<9|e>>>23,e=x+w|0,y^=e<<13|e>>>19,e=y+x|0,v^=e<<18|e>>>14,e=A+z|0,B^=e<<7|e>>>25,e=B+A|0,C^=e<<9|e>>>23,e=C+B|0,z^=e<<13|e>>>19,e=z+C|0,A^=e<<18|e>>>14,e=F+E|0,G^=e<<7|e>>>25,e=G+F|0,D^=e<<9|e>>>23,e=D+G|0,E^=e<<13|e>>>19,e=E+D|0,F^=e<<18|e>>>14,e=K+J|0,H^=e<<7|e>>>25,e=H+K|0,I^=e<<9|e>>>23,e=I+H|0,J^=e<<13|e>>>19,e=J+I|0,K^=e<<18|e>>>14;a[0]=v>>>0&255,a[1]=v>>>8&255,a[2]=v>>>16&255,a[3]=v>>>24&255,a[4]=A>>>0&255,a[5]=A>>>8&255,a[6]=A>>>16&255,a[7]=A>>>24&255,a[8]=F>>>0&255,a[9]=F>>>8&255,a[10]=F>>>16&255,a[11]=F>>>24&255,a[12]=K>>>0&255,a[13]=K>>>8&255,a[14]=K>>>16&255,a[15]=K>>>24&255,a[16]=B>>>0&255,a[17]=B>>>8&255,a[18]=B>>>16&255,a[19]=B>>>24&255,a[20]=C>>>0&255,a[21]=C>>>8&255,a[22]=C>>>16&255,a[23]=C>>>24&255,a[24]=D>>>0&255,a[25]=D>>>8&255,a[26]=D>>>16&255,a[27]=D>>>24&255,a[28]=E>>>0&255,a[29]=E>>>8&255,a[30]=E>>>16&255,a[31]=E>>>24&255}function h(a,b,c,d){f(a,b,c,d)}function i(a,b,c,d){g(a,b,c,d)}function j(a,b,c,d,e,f,g){var i,j,k=new Uint8Array(16),l=new Uint8Array(64);for(j=0;16>j;j++)k[j]=0;for(j=0;8>j;j++)k[j]=f[j];for(;e>=64;){for(h(l,k,g,la),j=0;64>j;j++)a[b+j]=c[d+j]^l[j];for(i=1,j=8;16>j;j++)i=i+(255&k[j])|0,k[j]=255&i,i>>>=8;e-=64,b+=64,d+=64}if(e>0)for(h(l,k,g,la),j=0;e>j;j++)a[b+j]=c[d+j]^l[j];return 0}function k(a,b,c,d,e){var f,g,i=new Uint8Array(16),j=new Uint8Array(64);for(g=0;16>g;g++)i[g]=0;for(g=0;8>g;g++)i[g]=d[g];for(;c>=64;){for(h(j,i,e,la),g=0;64>g;g++)a[b+g]=j[g];for(f=1,g=8;16>g;g++)f=f+(255&i[g])|0,i[g]=255&f,f>>>=8;c-=64,b+=64}if(c>0)for(h(j,i,e,la),g=0;c>g;g++)a[b+g]=j[g];return 0}function l(a,b,c,d,e){var f=new Uint8Array(32);i(f,d,e,la);for(var g=new Uint8Array(8),h=0;8>h;h++)g[h]=d[h+16];return k(a,b,c,g,f)}function m(a,b,c,d,e,f,g){var h=new Uint8Array(32);i(h,f,g,la);for(var k=new Uint8Array(8),l=0;8>l;l++)k[l]=f[l+16];return j(a,b,c,d,e,k,h)}function n(a,b,c,d,e,f){var g=new ma(f);return g.update(c,d,e),g.finish(a,b),0}function o(a,b,c,e,f,g){var h=new Uint8Array(16);return n(h,0,c,e,f,g),d(a,b,h,0)}function p(a,b,c,d,e){var f;if(32>c)return-1;for(m(a,0,b,0,c,d,e),n(a,16,a,32,c-32,a),f=0;16>f;f++)a[f]=0;return 0}function q(a,b,c,d,e){var f,g=new Uint8Array(32);if(32>c)return-1;if(l(g,0,32,d,e),0!==o(b,16,b,32,c-32,g))return-1;for(m(a,0,b,0,c,d,e),f=0;32>f;f++)a[f]=0;return 0}function r(a,b){var c;for(c=0;16>c;c++)a[c]=0|b[c]}function s(a){var b,c,d=1;for(b=0;16>b;b++)c=a[b]+d+65535,d=Math.floor(c/65536),a[b]=c-65536*d;a[0]+=d-1+37*(d-1)}function t(a,b,c){for(var d,e=~(c-1),f=0;16>f;f++)d=e&(a[f]^b[f]),a[f]^=d,b[f]^=d}function u(a,b){var c,d,e,f=_(),g=_();for(c=0;16>c;c++)g[c]=b[c];for(s(g),s(g),s(g),d=0;2>d;d++){for(f[0]=g[0]-65517,c=1;15>c;c++)f[c]=g[c]-65535-(f[c-1]>>16&1),f[c-1]&=65535;f[15]=g[15]-32767-(f[14]>>16&1),e=f[15]>>16&1,f[14]&=65535,t(g,f,1-e)}for(c=0;16>c;c++)a[2*c]=255&g[c],a[2*c+1]=g[c]>>8}function v(a,b){var c=new Uint8Array(32),d=new Uint8Array(32);return u(c,a),u(d,b),e(c,0,d,0)}function w(a){var b=new Uint8Array(32);return u(b,a),1&b[0]}function x(a,b){var c;for(c=0;16>c;c++)a[c]=b[2*c]+(b[2*c+1]<<8);a[15]&=32767}function y(a,b,c){for(var d=0;16>d;d++)a[d]=b[d]+c[d]}function z(a,b,c){for(var d=0;16>d;d++)a[d]=b[d]-c[d]}function A(a,b,c){var d,e,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0,F=0,G=0,H=0,I=0,J=0,K=c[0],L=c[1],M=c[2],N=c[3],O=c[4],P=c[5],Q=c[6],R=c[7],S=c[8],T=c[9],U=c[10],V=c[11],W=c[12],X=c[13],Y=c[14],Z=c[15];d=b[0],f+=d*K,g+=d*L,h+=d*M,i+=d*N,j+=d*O,k+=d*P,l+=d*Q,m+=d*R,n+=d*S,o+=d*T,p+=d*U,q+=d*V,r+=d*W,s+=d*X,t+=d*Y,u+=d*Z,d=b[1],g+=d*K,h+=d*L,i+=d*M,j+=d*N,k+=d*O,l+=d*P,m+=d*Q,n+=d*R,o+=d*S,p+=d*T,q+=d*U,r+=d*V,s+=d*W,t+=d*X,u+=d*Y,v+=d*Z,d=b[2],h+=d*K,i+=d*L,j+=d*M,k+=d*N,l+=d*O,m+=d*P,n+=d*Q,o+=d*R,p+=d*S,q+=d*T,r+=d*U,s+=d*V,t+=d*W,u+=d*X,v+=d*Y,w+=d*Z,d=b[3],i+=d*K,j+=d*L,k+=d*M,l+=d*N,m+=d*O,n+=d*P,o+=d*Q,p+=d*R,q+=d*S,r+=d*T,s+=d*U,t+=d*V,u+=d*W,v+=d*X,w+=d*Y,x+=d*Z,d=b[4],j+=d*K,k+=d*L,l+=d*M,m+=d*N,n+=d*O,o+=d*P,p+=d*Q,q+=d*R,r+=d*S,s+=d*T,t+=d*U,u+=d*V,v+=d*W,w+=d*X,x+=d*Y,y+=d*Z,d=b[5],k+=d*K,l+=d*L,m+=d*M,n+=d*N,o+=d*O,p+=d*P,q+=d*Q,r+=d*R,s+=d*S,t+=d*T,u+=d*U,v+=d*V,w+=d*W,x+=d*X,y+=d*Y,z+=d*Z,d=b[6],l+=d*K,m+=d*L,n+=d*M,o+=d*N,p+=d*O,q+=d*P,r+=d*Q,s+=d*R,t+=d*S,u+=d*T,v+=d*U,w+=d*V,x+=d*W,y+=d*X,z+=d*Y,A+=d*Z,d=b[7],m+=d*K,n+=d*L,o+=d*M,p+=d*N,q+=d*O,r+=d*P,s+=d*Q,t+=d*R,u+=d*S,v+=d*T,w+=d*U,x+=d*V,y+=d*W,z+=d*X,A+=d*Y,B+=d*Z,d=b[8],n+=d*K,o+=d*L,p+=d*M,q+=d*N,r+=d*O,s+=d*P,t+=d*Q,u+=d*R,v+=d*S,w+=d*T,x+=d*U,y+=d*V,z+=d*W,A+=d*X,B+=d*Y,C+=d*Z,d=b[9],o+=d*K,p+=d*L,q+=d*M,r+=d*N,s+=d*O,t+=d*P,u+=d*Q,v+=d*R,w+=d*S,x+=d*T,y+=d*U,z+=d*V,A+=d*W,B+=d*X,C+=d*Y,D+=d*Z,d=b[10],p+=d*K,q+=d*L,r+=d*M,s+=d*N,t+=d*O,u+=d*P,v+=d*Q,w+=d*R,x+=d*S,y+=d*T,z+=d*U,A+=d*V,B+=d*W,C+=d*X,D+=d*Y,E+=d*Z,d=b[11],q+=d*K,r+=d*L,s+=d*M,t+=d*N,u+=d*O,v+=d*P,w+=d*Q,x+=d*R,y+=d*S,z+=d*T,A+=d*U,B+=d*V,C+=d*W,D+=d*X,E+=d*Y,F+=d*Z,d=b[12],r+=d*K,s+=d*L,t+=d*M,u+=d*N,v+=d*O,w+=d*P,x+=d*Q,y+=d*R,z+=d*S,A+=d*T,B+=d*U,C+=d*V,D+=d*W,E+=d*X,F+=d*Y,G+=d*Z,d=b[13],s+=d*K,t+=d*L,u+=d*M,v+=d*N,w+=d*O,x+=d*P,y+=d*Q,z+=d*R,A+=d*S,B+=d*T,C+=d*U,D+=d*V,E+=d*W,F+=d*X,G+=d*Y,H+=d*Z,d=b[14],t+=d*K,u+=d*L,v+=d*M,w+=d*N,x+=d*O,y+=d*P,z+=d*Q,A+=d*R,B+=d*S,C+=d*T,D+=d*U,E+=d*V,F+=d*W,G+=d*X,H+=d*Y,I+=d*Z,d=b[15],u+=d*K,v+=d*L,w+=d*M,x+=d*N,y+=d*O,z+=d*P,A+=d*Q,B+=d*R,C+=d*S,D+=d*T,E+=d*U,F+=d*V,G+=d*W,H+=d*X,I+=d*Y,J+=d*Z,f+=38*v,g+=38*w,h+=38*x,i+=38*y,j+=38*z,k+=38*A,l+=38*B,m+=38*C,n+=38*D,o+=38*E,p+=38*F,q+=38*G,r+=38*H,s+=38*I,t+=38*J,e=1,d=f+e+65535,e=Math.floor(d/65536),f=d-65536*e,d=g+e+65535,e=Math.floor(d/65536),g=d-65536*e,d=h+e+65535,e=Math.floor(d/65536),h=d-65536*e,d=i+e+65535,e=Math.floor(d/65536),i=d-65536*e,d=j+e+65535,e=Math.floor(d/65536),j=d-65536*e,d=k+e+65535,e=Math.floor(d/65536),k=d-65536*e,d=l+e+65535,e=Math.floor(d/65536),l=d-65536*e,d=m+e+65535,e=Math.floor(d/65536),m=d-65536*e,d=n+e+65535,e=Math.floor(d/65536),n=d-65536*e,d=o+e+65535,e=Math.floor(d/65536),o=d-65536*e,d=p+e+65535,e=Math.floor(d/65536),p=d-65536*e,d=q+e+65535,e=Math.floor(d/65536),q=d-65536*e,d=r+e+65535,e=Math.floor(d/65536),r=d-65536*e,d=s+e+65535,e=Math.floor(d/65536),s=d-65536*e,d=t+e+65535,e=Math.floor(d/65536),t=d-65536*e,d=u+e+65535,e=Math.floor(d/65536),u=d-65536*e,f+=e-1+37*(e-1),e=1,d=f+e+65535,e=Math.floor(d/65536),f=d-65536*e,d=g+e+65535,e=Math.floor(d/65536),g=d-65536*e,d=h+e+65535,e=Math.floor(d/65536),h=d-65536*e,d=i+e+65535,e=Math.floor(d/65536),i=d-65536*e,d=j+e+65535,e=Math.floor(d/65536),j=d-65536*e,d=k+e+65535,e=Math.floor(d/65536),k=d-65536*e,d=l+e+65535,e=Math.floor(d/65536),l=d-65536*e,d=m+e+65535,e=Math.floor(d/65536),m=d-65536*e,d=n+e+65535,e=Math.floor(d/65536),n=d-65536*e,d=o+e+65535,e=Math.floor(d/65536),o=d-65536*e,d=p+e+65535,e=Math.floor(d/65536),p=d-65536*e,d=q+e+65535,e=Math.floor(d/65536),q=d-65536*e,d=r+e+65535,e=Math.floor(d/65536),r=d-65536*e,d=s+e+65535,e=Math.floor(d/65536),s=d-65536*e,d=t+e+65535,e=Math.floor(d/65536),t=d-65536*e,d=u+e+65535,e=Math.floor(d/65536),u=d-65536*e,f+=e-1+37*(e-1),a[0]=f,a[1]=g,a[2]=h,a[3]=i,a[4]=j,a[5]=k,a[6]=l,a[7]=m,a[8]=n,a[9]=o,a[10]=p,a[11]=q,a[12]=r,a[13]=s,a[14]=t,a[15]=u}function B(a,b){A(a,b,b)}function C(a,b){var c,d=_();for(c=0;16>c;c++)d[c]=b[c];for(c=253;c>=0;c--)B(d,d),2!==c&&4!==c&&A(d,d,b);for(c=0;16>c;c++)a[c]=d[c]}function D(a,b){var c,d=_();for(c=0;16>c;c++)d[c]=b[c];for(c=250;c>=0;c--)B(d,d),1!==c&&A(d,d,b);for(c=0;16>c;c++)a[c]=d[c]}function E(a,b,c){var d,e,f=new Uint8Array(32),g=new Float64Array(80),h=_(),i=_(),j=_(),k=_(),l=_(),m=_();for(e=0;31>e;e++)f[e]=b[e];for(f[31]=127&b[31]|64,f[0]&=248,x(g,c),e=0;16>e;e++)i[e]=g[e],k[e]=h[e]=j[e]=0;for(h[0]=k[0]=1,e=254;e>=0;--e)d=f[e>>>3]>>>(7&e)&1,t(h,i,d),t(j,k,d),y(l,h,j),z(h,h,j),y(j,i,k),z(i,i,k),B(k,l),B(m,h),A(h,j,h),A(j,i,l),y(l,h,j),z(h,h,j),B(i,h),z(j,k,m),A(h,j,fa),y(h,h,k),A(j,j,h),A(h,k,m),A(k,i,g),B(i,l),t(h,i,d),t(j,k,d);for(e=0;16>e;e++)g[e+16]=h[e],g[e+32]=j[e],g[e+48]=i[e],g[e+64]=k[e];var n=g.subarray(32),o=g.subarray(16);return C(n,n),A(o,o,n),u(a,o),0}function F(a,b){return E(a,b,ca)}function G(a,b){return aa(b,32),F(a,b)}function H(a,b,c){var d=new Uint8Array(32);return E(d,c,b),i(a,ba,d,la)}function I(a,b,c,d,e,f){var g=new Uint8Array(32);return H(g,e,f),na(a,b,c,d,g)}function J(a,b,c,d,e,f){var g=new Uint8Array(32);return H(g,e,f),oa(a,b,c,d,g)}function K(a,b,c,d){for(var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E=new Int32Array(16),F=new Int32Array(16),G=a[0],H=a[1],I=a[2],J=a[3],K=a[4],L=a[5],M=a[6],N=a[7],O=b[0],P=b[1],Q=b[2],R=b[3],S=b[4],T=b[5],U=b[6],V=b[7],W=0;d>=128;){for(w=0;16>w;w++)x=8*w+W,E[w]=c[x+0]<<24|c[x+1]<<16|c[x+2]<<8|c[x+3],F[w]=c[x+4]<<24|c[x+5]<<16|c[x+6]<<8|c[x+7];for(w=0;80>w;w++)if(e=G,f=H,g=I,h=J,i=K,j=L,k=M,l=N,m=O,n=P,o=Q,p=R,q=S,r=T,s=U,t=V,y=N,z=V,A=65535&z,B=z>>>16,C=65535&y,D=y>>>16,y=(K>>>14|S<<18)^(K>>>18|S<<14)^(S>>>9|K<<23),z=(S>>>14|K<<18)^(S>>>18|K<<14)^(K>>>9|S<<23),A+=65535&z,B+=z>>>16,C+=65535&y,D+=y>>>16,y=K&L^~K&M,z=S&T^~S&U,A+=65535&z,B+=z>>>16,C+=65535&y,D+=y>>>16,y=pa[2*w],z=pa[2*w+1],A+=65535&z,B+=z>>>16,C+=65535&y,D+=y>>>16,y=E[w%16],z=F[w%16],A+=65535&z,B+=z>>>16,C+=65535&y,D+=y>>>16,B+=A>>>16,C+=B>>>16,D+=C>>>16,u=65535&C|D<<16,v=65535&A|B<<16,y=u,z=v,A=65535&z,B=z>>>16,C=65535&y,D=y>>>16,y=(G>>>28|O<<4)^(O>>>2|G<<30)^(O>>>7|G<<25),z=(O>>>28|G<<4)^(G>>>2|O<<30)^(G>>>7|O<<25),A+=65535&z,B+=z>>>16,C+=65535&y,D+=y>>>16,y=G&H^G&I^H&I,z=O&P^O&Q^P&Q,A+=65535&z,B+=z>>>16,C+=65535&y,D+=y>>>16,B+=A>>>16,C+=B>>>16,D+=C>>>16,l=65535&C|D<<16,t=65535&A|B<<16,y=h,z=p,A=65535&z,B=z>>>16,C=65535&y,D=y>>>16,y=u,z=v,A+=65535&z,B+=z>>>16,C+=65535&y,D+=y>>>16,B+=A>>>16,C+=B>>>16,D+=C>>>16,h=65535&C|D<<16,p=65535&A|B<<16,H=e,I=f,J=g,K=h,L=i,M=j,N=k,G=l,P=m,Q=n,R=o,S=p,T=q,U=r,V=s,O=t,w%16===15)for(x=0;16>x;x++)y=E[x],z=F[x],A=65535&z,B=z>>>16,C=65535&y,D=y>>>16,y=E[(x+9)%16],z=F[(x+9)%16],A+=65535&z,B+=z>>>16,C+=65535&y,D+=y>>>16,u=E[(x+1)%16],v=F[(x+1)%16],y=(u>>>1|v<<31)^(u>>>8|v<<24)^u>>>7,z=(v>>>1|u<<31)^(v>>>8|u<<24)^(v>>>7|u<<25),A+=65535&z,B+=z>>>16,C+=65535&y,D+=y>>>16,u=E[(x+14)%16],v=F[(x+14)%16],y=(u>>>19|v<<13)^(v>>>29|u<<3)^u>>>6,z=(v>>>19|u<<13)^(u>>>29|v<<3)^(v>>>6|u<<26),A+=65535&z,B+=z>>>16,C+=65535&y,D+=y>>>16,B+=A>>>16,C+=B>>>16,D+=C>>>16,E[x]=65535&C|D<<16,F[x]=65535&A|B<<16;y=G,z=O,A=65535&z,B=z>>>16,C=65535&y,D=y>>>16,y=a[0],z=b[0],A+=65535&z,B+=z>>>16,C+=65535&y,D+=y>>>16,B+=A>>>16,C+=B>>>16,D+=C>>>16,a[0]=G=65535&C|D<<16,b[0]=O=65535&A|B<<16,y=H,z=P,A=65535&z,B=z>>>16,C=65535&y,D=y>>>16,y=a[1],z=b[1],A+=65535&z,B+=z>>>16,C+=65535&y,D+=y>>>16,B+=A>>>16,C+=B>>>16,D+=C>>>16,a[1]=H=65535&C|D<<16,b[1]=P=65535&A|B<<16,y=I,z=Q,A=65535&z,B=z>>>16,C=65535&y,D=y>>>16,y=a[2],z=b[2],A+=65535&z,B+=z>>>16,C+=65535&y,D+=y>>>16,B+=A>>>16,C+=B>>>16,D+=C>>>16,a[2]=I=65535&C|D<<16,b[2]=Q=65535&A|B<<16,y=J,z=R,A=65535&z,B=z>>>16,C=65535&y,D=y>>>16,y=a[3],z=b[3],A+=65535&z,B+=z>>>16,C+=65535&y,D+=y>>>16,B+=A>>>16,C+=B>>>16,D+=C>>>16,a[3]=J=65535&C|D<<16,b[3]=R=65535&A|B<<16,y=K,z=S,A=65535&z,B=z>>>16,C=65535&y,D=y>>>16,y=a[4],z=b[4],A+=65535&z,B+=z>>>16,C+=65535&y,D+=y>>>16,B+=A>>>16,C+=B>>>16,D+=C>>>16,a[4]=K=65535&C|D<<16,b[4]=S=65535&A|B<<16,y=L,z=T,A=65535&z,B=z>>>16,C=65535&y,D=y>>>16,y=a[5],z=b[5],A+=65535&z,B+=z>>>16,C+=65535&y,D+=y>>>16,B+=A>>>16,C+=B>>>16,D+=C>>>16,a[5]=L=65535&C|D<<16,b[5]=T=65535&A|B<<16,y=M,z=U,A=65535&z,B=z>>>16,C=65535&y,D=y>>>16,y=a[6],z=b[6],A+=65535&z,B+=z>>>16,C+=65535&y,D+=y>>>16,B+=A>>>16,C+=B>>>16,D+=C>>>16,a[6]=M=65535&C|D<<16,b[6]=U=65535&A|B<<16,y=N,z=V,A=65535&z,B=z>>>16,C=65535&y,D=y>>>16,y=a[7],z=b[7],A+=65535&z,B+=z>>>16,C+=65535&y,D+=y>>>16,B+=A>>>16,C+=B>>>16,D+=C>>>16,a[7]=N=65535&C|D<<16,b[7]=V=65535&A|B<<16,W+=128,d-=128}return d}function L(a,c,d){var e,f=new Int32Array(8),g=new Int32Array(8),h=new Uint8Array(256),i=d;for(f[0]=1779033703,f[1]=3144134277,f[2]=1013904242,f[3]=2773480762,f[4]=1359893119,f[5]=2600822924,f[6]=528734635,f[7]=1541459225,g[0]=4089235720,g[1]=2227873595,g[2]=4271175723,g[3]=1595750129,g[4]=2917565137,g[5]=725511199,g[6]=4215389547,g[7]=327033209,K(f,g,c,d),d%=128,e=0;d>e;e++)h[e]=c[i-d+e];for(h[d]=128,d=256-128*(112>d?1:0),h[d-9]=0,b(h,d-8,i/536870912|0,i<<3),K(f,g,h,d),e=0;8>e;e++)b(a,8*e,f[e],g[e]);return 0}function M(a,b){var c=_(),d=_(),e=_(),f=_(),g=_(),h=_(),i=_(),j=_(),k=_();z(c,a[1],a[0]),z(k,b[1],b[0]),A(c,c,k),y(d,a[0],a[1]),y(k,b[0],b[1]),A(d,d,k),A(e,a[3],b[3]),A(e,e,ha),A(f,a[2],b[2]),y(f,f,f),z(g,d,c),z(h,f,e),y(i,f,e),y(j,d,c),A(a[0],g,h),A(a[1],j,i),A(a[2],i,h),A(a[3],g,j)}function N(a,b,c){var d;for(d=0;4>d;d++)t(a[d],b[d],c)}function O(a,b){var c=_(),d=_(),e=_();C(e,b[2]),A(c,b[0],e),A(d,b[1],e),u(a,d),a[31]^=w(c)<<7}function P(a,b,c){var d,e;for(r(a[0],da),r(a[1],ea),r(a[2],ea),r(a[3],da),e=255;e>=0;--e)d=c[e/8|0]>>(7&e)&1,N(a,b,d),M(b,a),M(a,a),N(a,b,d)}function Q(a,b){var c=[_(),_(),_(),_()];r(c[0],ia),r(c[1],ja),r(c[2],ea),A(c[3],ia,ja),P(a,c,b)}function R(a,b,c){var d,e=new Uint8Array(64),f=[_(),_(),_(),_()];for(c||aa(b,32),L(e,b,32),e[0]&=248,e[31]&=127,e[31]|=64,Q(f,e),O(a,f),d=0;32>d;d++)b[d+32]=a[d];return 0}function S(a,b){var c,d,e,f;for(d=63;d>=32;--d){for(c=0,e=d-32,f=d-12;f>e;++e)b[e]+=c-16*b[d]*qa[e-(d-32)],c=b[e]+128>>8,b[e]-=256*c;b[e]+=c,b[d]=0}for(c=0,e=0;32>e;e++)b[e]+=c-(b[31]>>4)*qa[e],c=b[e]>>8,b[e]&=255;for(e=0;32>e;e++)b[e]-=c*qa[e];for(d=0;32>d;d++)b[d+1]+=b[d]>>8,a[d]=255&b[d]}function T(a){var b,c=new Float64Array(64);for(b=0;64>b;b++)c[b]=a[b];for(b=0;64>b;b++)a[b]=0;S(a,c)}function U(a,b,c,d){var e,f,g=new Uint8Array(64),h=new Uint8Array(64),i=new Uint8Array(64),j=new Float64Array(64),k=[_(),_(),_(),_()];L(g,d,32),g[0]&=248,g[31]&=127,g[31]|=64;var l=c+64;for(e=0;c>e;e++)a[64+e]=b[e];for(e=0;32>e;e++)a[32+e]=g[32+e];for(L(i,a.subarray(32),c+32),T(i),Q(k,i),O(a,k),e=32;64>e;e++)a[e]=d[e];for(L(h,a,c+64),T(h),e=0;64>e;e++)j[e]=0;for(e=0;32>e;e++)j[e]=i[e];for(e=0;32>e;e++)for(f=0;32>f;f++)j[e+f]+=h[e]*g[f];return S(a.subarray(32),j),l}function V(a,b){var c=_(),d=_(),e=_(),f=_(),g=_(),h=_(),i=_();return r(a[2],ea),x(a[1],b),B(e,a[1]),A(f,e,ga),z(e,e,a[2]),y(f,a[2],f),B(g,f),B(h,g),A(i,h,g),A(c,i,e),A(c,c,f),D(c,c),A(c,c,e),A(c,c,f),A(c,c,f),A(a[0],c,f),B(d,a[0]),A(d,d,f),v(d,e)&&A(a[0],a[0],ka),B(d,a[0]),A(d,d,f),v(d,e)?-1:(w(a[0])===b[31]>>7&&z(a[0],da,a[0]),A(a[3],a[0],a[1]),0)}function W(a,b,c,d){var f,g,h=new Uint8Array(32),i=new Uint8Array(64),j=[_(),_(),_(),_()],k=[_(),_(),_(),_()];if(g=-1,64>c)return-1;if(V(k,d))return-1;for(f=0;c>f;f++)a[f]=b[f];for(f=0;32>f;f++)a[f+32]=d[f];if(L(i,a,c),T(i),P(j,k,i),Q(k,b.subarray(32)),M(j,k),O(h,j),c-=64,e(b,0,h,0)){for(f=0;c>f;f++)a[f]=0;return-1}for(f=0;c>f;f++)a[f]=b[f+64];return g=c}function X(a,b){if(a.length!==ra)throw new Error("bad key size");if(b.length!==sa)throw new Error("bad nonce size")}function Y(a,b){if(a.length!==xa)throw new Error("bad public key size");if(b.length!==ya)throw new Error("bad secret key size")}function Z(){var a,b;for(b=0;b<arguments.length;b++)if("[object Uint8Array]"!==(a=Object.prototype.toString.call(arguments[b])))throw new TypeError("unexpected type "+a+", use Uint8Array")}function $(a){for(var b=0;b<a.length;b++)a[b]=0}var _=function(a){var b,c=new Float64Array(16);if(a)for(b=0;b<a.length;b++)c[b]=a[b];return c},aa=function(){throw new Error("no PRNG")},ba=new Uint8Array(16),ca=new Uint8Array(32);ca[0]=9;var da=_(),ea=_([1]),fa=_([56129,1]),ga=_([30883,4953,19914,30187,55467,16705,2637,112,59544,30585,16505,36039,65139,11119,27886,20995]),ha=_([61785,9906,39828,60374,45398,33411,5274,224,53552,61171,33010,6542,64743,22239,55772,9222]),ia=_([54554,36645,11616,51542,42930,38181,51040,26924,56412,64982,57905,49316,21502,52590,14035,8553]),ja=_([26200,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214]),ka=_([41136,18958,6951,50414,58488,44335,6150,12099,55207,15867,153,11085,57099,20417,9344,11139]),la=new Uint8Array([101,120,112,97,110,100,32,51,50,45,98,121,116,101,32,107]),ma=function(a){this.buffer=new Uint8Array(16),this.r=new Uint16Array(10),this.h=new Uint16Array(10),this.pad=new Uint16Array(8),this.leftover=0,this.fin=0;var b,c,d,e,f,g,h,i;b=255&a[0]|(255&a[1])<<8,this.r[0]=8191&b,c=255&a[2]|(255&a[3])<<8,this.r[1]=8191&(b>>>13|c<<3),d=255&a[4]|(255&a[5])<<8,this.r[2]=7939&(c>>>10|d<<6),e=255&a[6]|(255&a[7])<<8,this.r[3]=8191&(d>>>7|e<<9),f=255&a[8]|(255&a[9])<<8,this.r[4]=255&(e>>>4|f<<12),this.r[5]=f>>>1&8190,g=255&a[10]|(255&a[11])<<8,this.r[6]=8191&(f>>>14|g<<2),h=255&a[12]|(255&a[13])<<8,this.r[7]=8065&(g>>>11|h<<5),i=255&a[14]|(255&a[15])<<8,this.r[8]=8191&(h>>>8|i<<8),this.r[9]=i>>>5&127,this.pad[0]=255&a[16]|(255&a[17])<<8,this.pad[1]=255&a[18]|(255&a[19])<<8,this.pad[2]=255&a[20]|(255&a[21])<<8,this.pad[3]=255&a[22]|(255&a[23])<<8,this.pad[4]=255&a[24]|(255&a[25])<<8,this.pad[5]=255&a[26]|(255&a[27])<<8,this.pad[6]=255&a[28]|(255&a[29])<<8,this.pad[7]=255&a[30]|(255&a[31])<<8};ma.prototype.blocks=function(a,b,c){for(var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w=this.fin?0:2048,x=this.h[0],y=this.h[1],z=this.h[2],A=this.h[3],B=this.h[4],C=this.h[5],D=this.h[6],E=this.h[7],F=this.h[8],G=this.h[9],H=this.r[0],I=this.r[1],J=this.r[2],K=this.r[3],L=this.r[4],M=this.r[5],N=this.r[6],O=this.r[7],P=this.r[8],Q=this.r[9];c>=16;)d=255&a[b+0]|(255&a[b+1])<<8,x+=8191&d,e=255&a[b+2]|(255&a[b+3])<<8,y+=8191&(d>>>13|e<<3),f=255&a[b+4]|(255&a[b+5])<<8,z+=8191&(e>>>10|f<<6),g=255&a[b+6]|(255&a[b+7])<<8,A+=8191&(f>>>7|g<<9),h=255&a[b+8]|(255&a[b+9])<<8,B+=8191&(g>>>4|h<<12),C+=h>>>1&8191,i=255&a[b+10]|(255&a[b+11])<<8,D+=8191&(h>>>14|i<<2),j=255&a[b+12]|(255&a[b+13])<<8,E+=8191&(i>>>11|j<<5),k=255&a[b+14]|(255&a[b+15])<<8,F+=8191&(j>>>8|k<<8),G+=k>>>5|w,l=0,m=l,m+=x*H,m+=y*(5*Q),m+=z*(5*P),m+=A*(5*O),m+=B*(5*N),l=m>>>13,m&=8191,m+=C*(5*M),m+=D*(5*L),m+=E*(5*K),m+=F*(5*J),m+=G*(5*I),l+=m>>>13,m&=8191,n=l,n+=x*I,n+=y*H,n+=z*(5*Q),n+=A*(5*P),n+=B*(5*O),l=n>>>13,n&=8191,n+=C*(5*N),n+=D*(5*M),n+=E*(5*L),n+=F*(5*K),n+=G*(5*J),l+=n>>>13,n&=8191,o=l,o+=x*J,o+=y*I,o+=z*H,o+=A*(5*Q),o+=B*(5*P),l=o>>>13,o&=8191,o+=C*(5*O),o+=D*(5*N),o+=E*(5*M),o+=F*(5*L),o+=G*(5*K),l+=o>>>13,o&=8191,p=l,p+=x*K,p+=y*J,p+=z*I,p+=A*H,p+=B*(5*Q),l=p>>>13,p&=8191,p+=C*(5*P),p+=D*(5*O),p+=E*(5*N),p+=F*(5*M),p+=G*(5*L),l+=p>>>13,p&=8191,q=l,q+=x*L,q+=y*K,q+=z*J,q+=A*I,q+=B*H,l=q>>>13,q&=8191,q+=C*(5*Q),q+=D*(5*P),q+=E*(5*O),q+=F*(5*N),q+=G*(5*M),l+=q>>>13,q&=8191,r=l,r+=x*M,r+=y*L,r+=z*K,r+=A*J,r+=B*I,l=r>>>13,r&=8191,r+=C*H,r+=D*(5*Q),r+=E*(5*P),r+=F*(5*O),r+=G*(5*N),l+=r>>>13,r&=8191,s=l,s+=x*N,s+=y*M,s+=z*L,s+=A*K,s+=B*J,l=s>>>13,s&=8191,s+=C*I,s+=D*H,s+=E*(5*Q),s+=F*(5*P),s+=G*(5*O),l+=s>>>13,s&=8191,t=l,t+=x*O,t+=y*N,t+=z*M,t+=A*L,t+=B*K,l=t>>>13,t&=8191,t+=C*J,t+=D*I,t+=E*H,t+=F*(5*Q),t+=G*(5*P),l+=t>>>13,t&=8191,u=l,u+=x*P,u+=y*O,u+=z*N,u+=A*M,u+=B*L,l=u>>>13,u&=8191,u+=C*K,u+=D*J,u+=E*I,u+=F*H,u+=G*(5*Q),l+=u>>>13,u&=8191,v=l,v+=x*Q,v+=y*P,v+=z*O,v+=A*N,v+=B*M,l=v>>>13,v&=8191,v+=C*L,v+=D*K,v+=E*J,v+=F*I,v+=G*H,l+=v>>>13,v&=8191,l=(l<<2)+l|0,l=l+m|0,m=8191&l,l>>>=13,n+=l,x=m,y=n,z=o,A=p,B=q,C=r,D=s,E=t,F=u,G=v,b+=16,c-=16;this.h[0]=x,this.h[1]=y,this.h[2]=z,this.h[3]=A,this.h[4]=B,this.h[5]=C,this.h[6]=D,this.h[7]=E,this.h[8]=F,this.h[9]=G},ma.prototype.finish=function(a,b){var c,d,e,f,g=new Uint16Array(10);if(this.leftover){for(f=this.leftover,this.buffer[f++]=1;16>f;f++)this.buffer[f]=0;this.fin=1,this.blocks(this.buffer,0,16)}for(c=this.h[1]>>>13,this.h[1]&=8191,f=2;10>f;f++)this.h[f]+=c,c=this.h[f]>>>13,this.h[f]&=8191;for(this.h[0]+=5*c,c=this.h[0]>>>13,this.h[0]&=8191,this.h[1]+=c,c=this.h[1]>>>13,this.h[1]&=8191,this.h[2]+=c,g[0]=this.h[0]+5,c=g[0]>>>13,g[0]&=8191,f=1;10>f;f++)g[f]=this.h[f]+c,c=g[f]>>>13,g[f]&=8191;for(g[9]-=8192,d=(1^c)-1,f=0;10>f;f++)g[f]&=d;for(d=~d,f=0;10>f;f++)this.h[f]=this.h[f]&d|g[f];for(this.h[0]=65535&(this.h[0]|this.h[1]<<13),this.h[1]=65535&(this.h[1]>>>3|this.h[2]<<10),this.h[2]=65535&(this.h[2]>>>6|this.h[3]<<7),this.h[3]=65535&(this.h[3]>>>9|this.h[4]<<4),this.h[4]=65535&(this.h[4]>>>12|this.h[5]<<1|this.h[6]<<14),this.h[5]=65535&(this.h[6]>>>2|this.h[7]<<11),this.h[6]=65535&(this.h[7]>>>5|this.h[8]<<8),this.h[7]=65535&(this.h[8]>>>8|this.h[9]<<5),e=this.h[0]+this.pad[0],this.h[0]=65535&e,f=1;8>f;f++)e=(this.h[f]+this.pad[f]|0)+(e>>>16)|0,this.h[f]=65535&e;a[b+0]=this.h[0]>>>0&255,a[b+1]=this.h[0]>>>8&255,a[b+2]=this.h[1]>>>0&255,a[b+3]=this.h[1]>>>8&255,a[b+4]=this.h[2]>>>0&255,a[b+5]=this.h[2]>>>8&255,a[b+6]=this.h[3]>>>0&255,a[b+7]=this.h[3]>>>8&255,a[b+8]=this.h[4]>>>0&255,a[b+9]=this.h[4]>>>8&255,a[b+10]=this.h[5]>>>0&255,a[b+11]=this.h[5]>>>8&255,a[b+12]=this.h[6]>>>0&255,a[b+13]=this.h[6]>>>8&255,a[b+14]=this.h[7]>>>0&255,a[b+15]=this.h[7]>>>8&255},ma.prototype.update=function(a,b,c){var d,e;if(this.leftover){for(e=16-this.leftover,e>c&&(e=c),d=0;e>d;d++)this.buffer[this.leftover+d]=a[b+d];if(c-=e,b+=e,this.leftover+=e,this.leftover<16)return;this.blocks(this.buffer,0,16),this.leftover=0}if(c>=16&&(e=c-c%16,this.blocks(a,b,e),b+=e,c-=e),c){for(d=0;c>d;d++)this.buffer[this.leftover+d]=a[b+d];this.leftover+=c}};var na=p,oa=q,pa=[1116352408,3609767458,1899447441,602891725,3049323471,3964484399,3921009573,2173295548,961987163,4081628472,1508970993,3053834265,2453635748,2937671579,2870763221,3664609560,3624381080,2734883394,310598401,1164996542,607225278,1323610764,1426881987,3590304994,1925078388,4068182383,2162078206,991336113,2614888103,633803317,3248222580,3479774868,3835390401,2666613458,4022224774,944711139,264347078,2341262773,604807628,2007800933,770255983,1495990901,1249150122,1856431235,1555081692,3175218132,1996064986,2198950837,2554220882,3999719339,2821834349,766784016,2952996808,2566594879,3210313671,3203337956,3336571891,1034457026,3584528711,2466948901,113926993,3758326383,338241895,168717936,666307205,1188179964,773529912,1546045734,1294757372,1522805485,1396182291,2643833823,1695183700,2343527390,1986661051,1014477480,2177026350,1206759142,2456956037,344077627,2730485921,1290863460,2820302411,3158454273,3259730800,3505952657,3345764771,106217008,3516065817,3606008344,3600352804,1432725776,4094571909,1467031594,275423344,851169720,430227734,3100823752,506948616,1363258195,659060556,3750685593,883997877,3785050280,958139571,3318307427,1322822218,3812723403,1537002063,2003034995,1747873779,3602036899,1955562222,1575990012,2024104815,1125592928,2227730452,2716904306,2361852424,442776044,2428436474,593698344,2756734187,3733110249,3204031479,2999351573,3329325298,3815920427,3391569614,3928383900,3515267271,566280711,3940187606,3454069534,4118630271,4000239992,116418474,1914138554,174292421,2731055270,289380356,3203993006,460393269,320620315,685471733,587496836,852142971,1086792851,1017036298,365543100,1126000580,2618297676,1288033470,3409855158,1501505948,4234509866,1607167915,987167468,1816402316,1246189591],qa=new Float64Array([237,211,245,92,26,99,18,88,214,156,247,162,222,249,222,20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16]),ra=32,sa=24,ta=32,ua=16,va=32,wa=32,xa=32,ya=32,za=32,Aa=sa,Ba=ta,Ca=ua,Da=64,Ea=32,Fa=64,Ga=32,Ha=64;a.lowlevel={crypto_core_hsalsa20:i,crypto_stream_xor:m,crypto_stream:l,crypto_stream_salsa20_xor:j,crypto_stream_salsa20:k,crypto_onetimeauth:n,crypto_onetimeauth_verify:o,crypto_verify_16:d,crypto_verify_32:e,crypto_secretbox:p,crypto_secretbox_open:q,crypto_scalarmult:E,crypto_scalarmult_base:F,crypto_box_beforenm:H,crypto_box_afternm:na,crypto_box:I,crypto_box_open:J,crypto_box_keypair:G,crypto_hash:L,crypto_sign:U,crypto_sign_keypair:R,crypto_sign_open:W,crypto_secretbox_KEYBYTES:ra,crypto_secretbox_NONCEBYTES:sa,crypto_secretbox_ZEROBYTES:ta,crypto_secretbox_BOXZEROBYTES:ua,crypto_scalarmult_BYTES:va,crypto_scalarmult_SCALARBYTES:wa,crypto_box_PUBLICKEYBYTES:xa,crypto_box_SECRETKEYBYTES:ya,crypto_box_BEFORENMBYTES:za,crypto_box_NONCEBYTES:Aa,crypto_box_ZEROBYTES:Ba,crypto_box_BOXZEROBYTES:Ca,crypto_sign_BYTES:Da,crypto_sign_PUBLICKEYBYTES:Ea,crypto_sign_SECRETKEYBYTES:Fa,crypto_sign_SEEDBYTES:Ga,crypto_hash_BYTES:Ha},a.util||(a.util={},a.util.decodeUTF8=a.util.encodeUTF8=a.util.encodeBase64=a.util.decodeBase64=function(){throw new Error("nacl.util moved into separate package: https://github.com/dchest/tweetnacl-util-js")}),a.randomBytes=function(a){var b=new Uint8Array(a);return aa(b,a),b},a.secretbox=function(a,b,c){Z(a,b,c),X(c,b);for(var d=new Uint8Array(ta+a.length),e=new Uint8Array(d.length),f=0;f<a.length;f++)d[f+ta]=a[f];return p(e,d,d.length,b,c),e.subarray(ua)},a.secretbox.open=function(a,b,c){Z(a,b,c),X(c,b);for(var d=new Uint8Array(ua+a.length),e=new Uint8Array(d.length),f=0;f<a.length;f++)d[f+ua]=a[f];return d.length<32?!1:0!==q(e,d,d.length,b,c)?!1:e.subarray(ta)},a.secretbox.keyLength=ra,a.secretbox.nonceLength=sa,a.secretbox.overheadLength=ua,a.scalarMult=function(a,b){if(Z(a,b),a.length!==wa)throw new Error("bad n size");if(b.length!==va)throw new Error("bad p size");var c=new Uint8Array(va);return E(c,a,b),c},a.scalarMult.base=function(a){if(Z(a),a.length!==wa)throw new Error("bad n size");var b=new Uint8Array(va);return F(b,a),b},a.scalarMult.scalarLength=wa,a.scalarMult.groupElementLength=va,a.box=function(b,c,d,e){var f=a.box.before(d,e);return a.secretbox(b,c,f)},a.box.before=function(a,b){Z(a,b),Y(a,b);var c=new Uint8Array(za);return H(c,a,b),c},a.box.after=a.secretbox,a.box.open=function(b,c,d,e){var f=a.box.before(d,e);return a.secretbox.open(b,c,f)},a.box.open.after=a.secretbox.open,a.box.keyPair=function(){var a=new Uint8Array(xa),b=new Uint8Array(ya);return G(a,b),{publicKey:a,secretKey:b}},a.box.keyPair.fromSecretKey=function(a){if(Z(a),a.length!==ya)throw new Error("bad secret key size");var b=new Uint8Array(xa);return F(b,a),{publicKey:b,secretKey:new Uint8Array(a)}},a.box.publicKeyLength=xa,a.box.secretKeyLength=ya,a.box.sharedKeyLength=za,a.box.nonceLength=Aa,a.box.overheadLength=a.secretbox.overheadLength,a.sign=function(a,b){if(Z(a,b),b.length!==Fa)throw new Error("bad secret key size");var c=new Uint8Array(Da+a.length);return U(c,a,a.length,b),c},a.sign.open=function(a,b){if(2!==arguments.length)throw new Error("nacl.sign.open accepts 2 arguments; did you mean to use nacl.sign.detached.verify?");if(Z(a,b),b.length!==Ea)throw new Error("bad public key size");var c=new Uint8Array(a.length),d=W(c,a,a.length,b);if(0>d)return null;for(var e=new Uint8Array(d),f=0;f<e.length;f++)e[f]=c[f];return e},a.sign.detached=function(b,c){for(var d=a.sign(b,c),e=new Uint8Array(Da),f=0;f<e.length;f++)e[f]=d[f];return e},a.sign.detached.verify=function(a,b,c){if(Z(a,b,c),b.length!==Da)throw new Error("bad signature size");if(c.length!==Ea)throw new Error("bad public key size");var d,e=new Uint8Array(Da+a.length),f=new Uint8Array(Da+a.length);for(d=0;Da>d;d++)e[d]=b[d];for(d=0;d<a.length;d++)e[d+Da]=a[d];return W(f,e,e.length,c)>=0},a.sign.keyPair=function(){var a=new Uint8Array(Ea),b=new Uint8Array(Fa);return R(a,b),{publicKey:a,secretKey:b}},a.sign.keyPair.fromSecretKey=function(a){if(Z(a),a.length!==Fa)throw new Error("bad secret key size");for(var b=new Uint8Array(Ea),c=0;c<b.length;c++)b[c]=a[32+c];return{publicKey:b,secretKey:new Uint8Array(a)}},a.sign.keyPair.fromSeed=function(a){if(Z(a),a.length!==Ga)throw new Error("bad seed size");for(var b=new Uint8Array(Ea),c=new Uint8Array(Fa),d=0;32>d;d++)c[d]=a[d];return R(b,c,!0),{publicKey:b,secretKey:c}},a.sign.publicKeyLength=Ea,a.sign.secretKeyLength=Fa,a.sign.seedLength=Ga,a.sign.signatureLength=Da,a.hash=function(a){Z(a);var b=new Uint8Array(Ha);return L(b,a,a.length),b},a.hash.hashLength=Ha,a.verify=function(a,b){return Z(a,b),
0===a.length||0===b.length?!1:a.length!==b.length?!1:0===c(a,0,b,0,a.length)},a.setPRNG=function(a){aa=a},function(){var b="undefined"!=typeof self?self.crypto||self.msCrypto:null;if(b&&b.getRandomValues){var c=65536;a.setPRNG(function(a,d){var e,f=new Uint8Array(d);for(e=0;d>e;e+=c)b.getRandomValues(f.subarray(e,e+Math.min(d-e,c)));for(e=0;d>e;e++)a[e]=f[e];$(f)})}else"undefined"!=typeof require&&(b=require("crypto"),b&&b.randomBytes&&a.setPRNG(function(a,c){var d,e=b.randomBytes(c);for(d=0;c>d;d++)a[d]=e[d];$(e)}))}()}("undefined"!=typeof module&&module.exports?module.exports:self.nacl=self.nacl||{});
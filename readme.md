1. mixin
@mixin font($size:null,$weight:null,$line-height:null){
    @content;
}
use : 
h1{

@include font($size:22px,$weight:500);
}

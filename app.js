angular
  .module("mixes",[


])

.controller("mixesController",[
  mixesControllerFunc
])

function mixesControllerFunc(){
  var vm = this;
  vm.mixes = [{title:"mix1"}, {title:"mix2"}]
}

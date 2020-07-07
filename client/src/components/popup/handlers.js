export function closePopup() {
  this.$eventBus.$emit("close-popup");
}
export function changeComponent(component, props) {
  this.$eventBus.$emit("popup-component", { component, props });
}

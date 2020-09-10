$(document).ready(function () {
  $("select").formSelect();
  $(".collapsible").collapsible();
  $(".dropdown-trigger").dropdown();
  $(".sidenav").sidenav();
  $("#logout").click(function () {
    if (confirm("Are you sure you want to logout?")) {
    } else {
      return false; //----On cancel user returns to current screen------//
    }
  });
  /*------Delete Button Confirmation-----*/
  $(".delete-btn").click(function () {
    if (
      confirm(
        "Are you sure you want to DELETE this recipe? This action cannot be undone!"
      )
    ) {
      alert("RECIPE HAS BEEN SUCCESSFULLY DELETED");
    } else {
      return false; //----On cancel user returns to current screen------//
    }
  });

  //   back button for breadcrumb nav

  $("#back").click(function () {
    window.history.back();
  });

  $("#save-btn").click(function () {
    alert("This recipe has been SAVED successfully!");
    $(".lever").addAttribute("selected");
    $("#save-text").text("SAVED");
  });

  //   remove button for saved recipes
  $(".remove-btn").click(function () {
    $(".remove").toggle("left");
  });

  $(".remove").click(function (){
    if (
      confirm(
        "Are you sure you want to REMOVE this recipe from the SAVED RECIPES? This action cannot be undone!"
      )
    ) {
      alert("RECIPE HAS BEEN SUCCESSFULLY REMOVED");
    } else {
      return false; //----On cancel user returns to current screen------//
    }
  });

//   button pulse function
  $("button").mouseover(function () {
    $(this).addClass("pulse");
  });
  $("button").mouseout(function () {
    $(this).removeClass("pulse");
  });

// Shows all recipes
  $("#allRecipes").click(function(){
      $(".recipe-cards").attr("hidden",false);
  });

//   Recipe types menu to be shown
  $("#types-btn").click(function(){
      $("#recipeTypeCards").slideToggle("slow");
      $("#all_recipes").hide("slow");
  });
  //   Shows all Vegan Recipes
  $("#vegan").click(function(){
      $("#all_recipes").toggle("slow");
  });

});

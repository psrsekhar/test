var request = 
{
    showPage: function(targetDiv, path)
    {
        var jqxhr = jQuery.post(path, function(data)
        {
            jQuery("#" + targetDiv).html(data);
        });
    },

    showMenu: function(){
        request.showPage("menu", "html/menu.html");
    },

    showHome: function(){
        request.showPage("body", "html/home.html");
    },

    showFooter: function(){
        request.showPage("footer", "html/footer.html");
    }
}
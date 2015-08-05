$(document).ready(function() {
            $("form.dropdown").click(function () {
                $("#search-result").show();
            });

            $(document).mouseup(function () {
                $("#search-result").hide();
            });
});
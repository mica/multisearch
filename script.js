$(function() {
    if (q) {
        $.each(urls, function(i, url) {
            var urla = url[1].split('/');
            $('#qlinks').append(
                $('<a/>', {'href': url[1].replace(' ', '+')}).append(
                    $('<div/>', {'class': 'qlink'}).append(
                        $('<div/>').append(
                            '<img src="https://www.google.com/s2/favicons?domain=' + urla[2] + '" />' + url[0]
                        )
                    ).append(
                        $('<p/>').append(
                            '<span><small>search</small><br />“</span>' + q + '<span>”</span>'
                        )
                    )
                )
            )
        });
        $('#qlinks').append(
            $('<div/>', {'id': 'qall'}).append(
                $('<p/>').append(
                    'Open All<br /><small>in New Tabs</small>'
                )
            ).click(function() {
                $.each(urls.reverse(), function(i, url) {
                    window.open(url[1]);
                })
            })
        );
        $('title').prepend(q+' - ');
        $('#q').val(q);
    }
});

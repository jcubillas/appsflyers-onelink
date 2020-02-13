/* eslint-disable no-undef */
function getUrlParameters() {
    const url = new URL(window.location.href);
    const urlParams = {
        refresh_token: url.searchParams.get('rt'),
        enterpriseId: url.searchParams.get('eid'),
    };
    return urlParams;
}

$(document).ready(() => {
    const urlParams = getUrlParameters();
    const url = '/LoadDashboards';
    $('#rt').val(urlParams.refresh_token);
    $('#eid').val(urlParams.enterpriseId);
    $.ajax({
        url,
        method: 'POST',
        async: false,
        data: urlParams,
        success: (data) => {
            $('#dashboard-table').html(data.table);
            $('#rt').val(data.refresh_token);
            $('#eid').val(data.enterpriseId);
        },
        error(jqXHR, error, errorThrown) {
            console.log(error);
            console.log(errorThrown);
            console.log(jqXHR);
        },
    });

    $('#btn-create').on('click', (e) => {
        e.preventDefault();
        console.log($('#eid').val());
        let redirectUrl = `/dashboard/create/?rt=${$('#rt').val()}`;
        redirectUrl += `&eid=${$('#eid').val()}`;
        window.location.href = redirectUrl;
    });

    $('#btn-create').on('click', (e) => {
        e.preventDefault();
    });

    $('.edit').on('click', function (e) {
        e.preventDefault();

        const href = $(this).attr('href');
        let link = href.replace('{0}', $('#eid').val());
        link = link.replace('{1}', $('#rt').val());
        window.location.href = link;
    });
});

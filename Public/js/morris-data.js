$(function() {
    var area_data = [{
            year: '2015 Q1',
            iphone: 2666,
            // ipad: null,
            itouch: 2647
        }, {
            year: '2015 Q2',
            iphone: 2778,
            // ipad: 2294,
            itouch: 2441
        }, {
            year: '2015 Q3',
            iphone: 4912,
            // ipad: 1969,
            itouch: 2501
        }, {
            year: '2015 Q4',
            iphone: 3767,
            // ipad: 3597,
            itouch: 5689
        }, {
            year: '2015 Q5',
            iphone: 6810,
            // ipad: 1914,
            itouch: 2293
        }, {
            year: '2015 Q6',
            iphone: 5670,
            // ipad: 4293,
            itouch: 1881
        }, {
            year: '2015 Q7',
            iphone: 4820,
            // ipad: 3795,
            itouch: 1588
        }, {
            year: '2015 Q8',
            iphone: 15073,
            // ipad: 5967,
            itouch: 5175
        }, {
            year: '2015 Q9',
            iphone: 10687,
            // ipad: 4460,
            itouch: 2028
        }, {
            year: '2015 Q10',
            iphone: 8432,
            // ipad: 5713,
            itouch: 1791
        }];
        console.log(area_data);
    Morris.Area({
        element: 'morris-area-chart',
        data: area_data,
        xkey: 'year',
        ykeys: ['iphone',  'itouch'],
        labels: ['iPhone', 'iPod Touch'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });

    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "Download Sales",
            value: 12
        }, {
            label: "In-Store Sales",
            value: 30
        }, {
            label: "Mail-Order Sales",
            value: 20
        }],
        resize: true
    });

    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: '2006 5',
            a: 100,
        }, {
            y: '2007 5',
            a: 75,
        }, {
            y: '2008 5',
            a: 50,
        }, {
            y: '2009 5',
            a: 75,
        }, {
            y: '2015 5',
            a: 50,
        }, {
            y: '2015',
            a: 75,
        }, {
            y: '2015',
            a: 100,
        }, {
            y: '2015',
            a: 75,
        }, {
            y: '2015',
            a: 100,
        }, {
            y: '2015',
            a: 75,
        }, {
            y: '2015',
            a: 100,
        }, {
            y: '2015',
            a: 75,
        }, {
            y: '2015',
            a: 100,
        }],
        xkey: 'y',
        ykeys: ['a'],
        labels: ['Series A', 'Series B'],
        hideHover: 'auto',
        resize: true
    });

});

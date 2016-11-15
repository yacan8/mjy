$(document).ready(function() {
$('#dataTables-example').DataTable({
                responsive: true,
                "language": {
                    "search": "过滤：",
                    "lengthMenu": '每页显示 _MENU_ 条记录',
                    "paginate": {
                      "next": "&raquo;",
                      "previous":"&laquo;"
                    },
                    "info":      "显示 _START_ 至 _END_ ，总共 _TOTAL_ 挑记录",
                    
                  },
                  "columnDefs": [
                        { "orderable": false, "targets": 6}
                    ]
        });
         //添加高级搜索按钮
        $("#dataTables-example_filter").append("  <a id='advanced-search-btn' class='btn btn-sm btn-default' href='#'>高级搜索 </a>");

        //添加daterangepicker时间选择时间
        $('#start').daterangepicker({ singleDatePicker: true ,language:  'zh-CN'});
        $('#end').daterangepicker({ singleDatePicker: true ,language:  'zh-CN'});
        //添加select2选择绑定
        $('#user-select').select2({
            placeholder: "请选择账号类型",
            width:'265px'
        });
        //解决bootstrap模态框和select2合用时input无法获取焦点
        $.fn.modal.Constructor.prototype.enforceFocus = function() {};
     })
    //高级搜索按钮时间委托
    $(document).on('click','#advanced-search-btn',function(){
        $('#advanced-search').modal('show');
    })
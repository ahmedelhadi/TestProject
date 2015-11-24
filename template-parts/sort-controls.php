<div class="sort-controls">

    <strong><?php _e('الفرز بواسطة','framework');?>:</strong>

    &nbsp;

    <select name="sort-properties" id="sort-properties">

        <option value="default"><?php _e('الترتيب الافتراضي','framework');?></option>

        <option value="price-asc" <?php echo ($_GET['orderby']=='price-asc')?'selected':''; ?>><?php _e('السعر من الاقل الى الاعلي','framework');?></option>

        <option value="price-desc" <?php echo ($_GET['orderby']=='price-desc')?'selected':''; ?>><?php _e('السعر من الاعلي الى الاقل','framework');?></option>

        <option value="date-asc" <?php echo ($_GET['orderby']=='date-asc')?'selected':''; ?>><?php _e('التاريخ من القديم الي الجديد','framework');?></option>

        <option value="date-desc" <?php echo ($_GET['orderby']=='date-desc')?'selected':''; ?>><?php _e('التاريخ من الحديث الي القديم','framework');?></option>

    </select>

</div>
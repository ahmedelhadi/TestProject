<?php
/* Property Custom Post Type */
if( !function_exists( 'create_property_post_type' ) ){
    function create_property_post_type(){

      $labels = array(
            'name' => __( 'العقارات','framework'),
            'singular_name' => __( 'عقارات','framework' ),
            'add_new' => __('إضافة عقار','framework'),
            'add_new_item' => __('إضافة بند جديد','framework'),
            'edit_item' => __('تعديل العقار','framework'),
            'new_item' => __('عقار جديد','framework'),
            'view_item' => __('عرض العقار','framework'),
            'search_items' => __('البحث عن عقار','framework'),
            'not_found' =>  __('لم يتم العثور على العقار','framework'),
            'not_found_in_trash' => __('لايوجد عقار في سلة المهملات','framework'),
            'parent_item_colon' => ''
          );

      $args = array(
            'labels' => $labels,
            'public' => true,
            'publicly_queryable' => true,
            'show_ui' => true,
            'query_var' => true,
            'rewrite' => true,
            'capability_type' => 'post',
            'hierarchical' => true,
            'menu_position' => 5,
            'supports' => array('title','editor','thumbnail','revisions','author','page-attributes'),
            'rewrite' => array( 'slug' => __('عقار', 'framework') )
      );

      register_post_type('property',$args);

    }
}
add_action('init', 'create_property_post_type');


/* Create Property Taxonomies */
if( !function_exists( 'build_taxonomies' ) ){
    function build_taxonomies(){
        $labels = array(
            'name' => __( 'ممميزات العقارات', 'framework' ),
            'singular_name' => __( 'مميزات العقارات', 'framework' ),
            'search_items' =>  __( 'البحث عن مميزات العقارات', 'framework' ),
            'popular_items' => __( 'مميزات العقارات الأكثر شيوعا', 'framework' ),
            'all_items' => __( 'جميع مميزات العقارات', 'framework' ),
            'parent_item' => __( 'مميزات العقارات الأساسية', 'framework' ),
            'parent_item_colon' => __( 'مميزات العقارات الأساسية:', 'framework' ),
            'edit_item' => __( 'تعديل مميزات العقارات', 'framework' ),
            'update_item' => __( 'تحديث مميزات العقارات', 'framework' ),
            'add_new_item' => __( 'إضافة ميزة عقار جديدة', 'framework' ),
            'new_item_name' => __( 'اسم ميزة العقار الجديد', 'framework' ),
            'separate_items_with_commas' => __( 'الفصل بين مميزات العقارات بفواصل', 'framework' ),
            'add_or_remove_items' => __( 'إضافة أو حذف ميزة عقار', 'framework' ),
            'choose_from_most_used' => __( 'اختر من مميزات العقارات الأكثر استخداما', 'framework' ),
            'menu_name' => __( 'مميزات العقارات', 'framework' )
        );

        register_taxonomy(
            'property-feature',
            array('property'),
            array(
                'hierarchical' => true,
                'labels' => $labels,
                'show_ui' => true,
                'query_var' => true,
                'rewrite' => array('slug' => __('property-feature', 'framework'))
            )
        );


        $type_labels = array(
            'name' => __( 'أنواع العقارات', 'framework' ),
            'singular_name' => __( 'أنواع العقارات', 'framework' ),
            'search_items' =>  __( 'البحث عن أنواع العقارات', 'framework' ),
            'popular_items' => __( 'أنواع العقارات الأكثر شيوعا', 'framework' ),
            'all_items' => __( 'جميع أنواع العقارات', 'framework' ),
            'parent_item' => __( 'أنواع العقارات الأساسية', 'framework' ),
            'parent_item_colon' => __( 'أنواع العقارات الأساسية:', 'framework' ),
            'edit_item' => __( 'تعديل أنواع العقارات', 'framework' ),
            'update_item' => __( 'تحديث أنواع العقارات', 'framework' ),
            'add_new_item' => __( 'إضافة أنواع عقارات جديدة', 'framework' ),
            'new_item_name' => __( 'اسماء أنواع العقارات', 'framework' ),
            'separate_items_with_commas' => __( 'الفصل بين أنواع العقارات بفواصل', 'framework' ),
            'add_or_remove_items' => __( 'إضافة أو حذف أنواع العقارات', 'framework' ),
            'choose_from_most_used' => __( 'اختر من انواع العقارات الأكثر استخداما', 'framework' ),
            'menu_name' => __( 'أنواع العقارات', 'framework' )
        );

        register_taxonomy(
            'property-type',
            array( 'property' ),
            array(
                'hierarchical' => true,
                'labels' => $type_labels,
                'show_ui' => true,
                'query_var' => true,
                'rewrite' => array('slug' => __('property-type', 'framework'))
            )
        );

        $city_labels = array(
            'name' => __( 'مدينة العقار', 'framework' ),
            'singular_name' => __( 'مدينة العقار', 'framework' ),
            'search_items' =>  __( 'البحث عن مدن العقار', 'framework' ),
            'popular_items' => __( 'مدن العقار الأكثر شيوعا', 'framework' ),
            'all_items' => __( 'جميع مدن العقار', 'framework' ),
            'parent_item' => __( 'مدينة العقار الأساسية', 'framework' ),
            'parent_item_colon' => __( 'مدينة العقار الأساسية:', 'framework' ),
            'edit_item' => __( 'تعديل مدينة العقار', 'framework' ),
            'update_item' => __( 'تحديث مدينة العقار', 'framework' ),
            'add_new_item' => __( 'إضافة مدينة عقار جديدة', 'framework' ),
            'new_item_name' => __( 'اسم مدينة العقار الجديد', 'framework' ),
            'separate_items_with_commas' => __( 'الفصل بين مدن العقار بفواصل', 'framework' ),
            'add_or_remove_items' => __( 'إضافة أو حذف مدينة عقار', 'framework' ),
            'choose_from_most_used' => __( 'اختر من بين مدن العقار الأكثر استخداما:', 'framework' ),
            'menu_name' => __( 'مدن العقار', 'framework' )
        );

        register_taxonomy(
            'property-city',
            array( 'property' ),
            array(
                'hierarchical' => true,
                'labels' => $city_labels,
                'show_ui' => true,
                'query_var' => true,
                'rewrite' => array('slug' => __('property-city', 'framework'))
            )
        );


        $status_labels = array(
            'name' => __( 'حالة العقار', 'framework' ),
            'singular_name' => __( 'حالة العقار', 'framework' ),
            'search_items' =>  __( 'البحث عن حالة العقار', 'framework' ),
            'popular_items' => __( 'حالة العقار الأكثر شيوعا', 'framework' ),
            'all_items' => __( 'جميع حالات العقار', 'framework' ),
            'parent_item' => __( 'حالة العقار الأساسية', 'framework' ),
            'parent_item_colon' => __( 'حالة العقار الأساسية:', 'framework' ),
            'edit_item' => __( 'تعديل حالة العقار', 'framework' ),
            'update_item' => __( 'تحديث حالة العقار', 'framework' ),
            'add_new_item' => __( 'إضافة حالة عقار جديدة', 'framework' ),
            'new_item_name' => __( 'اسم حالة العقار الجديد', 'framework' ),
            'separate_items_with_commas' => __( 'الفصل بين حالات العقار بفواصل', 'framework' ),
            'add_or_remove_items' => __( 'إضافة أو حذف حالة العقار', 'framework' ),
            'choose_from_most_used' => __( 'الإختيار من بين حالة العقار الأكثر استخداما', 'framework' ),
            'menu_name' => __( 'حالة العقار', 'framework' )
        );

        register_taxonomy(
            'property-status',
            array( 'property' ),
            array(
                'hierarchical' => true,
                'labels' => $status_labels,
                'show_ui' => true,
                'query_var' => true,
                'rewrite' => array('slug' => __('property-status', 'framework'))
            )
        );
    }
}
add_action( 'init', 'build_taxonomies', 0 );


/* Add Custom Columns */
if( !function_exists( 'property_edit_columns' ) ){
    function property_edit_columns($columns)
    {

        $columns = array(
            "cb" => "<input type=\"checkbox\" />",
            "title" => __( 'خاصية العقار','framework' ),
            "thumb" => __( 'المصغرات','framework' ),
            "address" => __('العنوان','framework'),
            "city" => __( 'المدينة','framework' ),
            "type" => __('النوع','framework'),
            "status" => __('الحالة','framework'),
            "price" => __('القطعة','framework'),
            "id" => __( 'رقم العقار','framework' ),
            /*
            "bed" => __('Beds','framework'),
            "bath" => __('Baths','framework'),
            "garage" => __('Garages','framework'),
            "features" => __('Features','framework'),
            */
            "date" => __( 'وقت النشر','framework' )
        );

        return $columns;
    }
}
add_filter("manage_edit-property_columns", "property_edit_columns");

if( !function_exists( 'property_custom_columns' ) ){
    function property_custom_columns($column){
        global $post;
        switch ($column)
        {
            case 'thumb':
                if(has_post_thumbnail($post->ID)){
                    ?>
                    <a href="<?php the_permalink(); ?>" target="_blank">
                        <?php the_post_thumbnail('post-thumbnail');?>
                    </a>
                    <?php
                }
                else{
                    _e('بدون مصغرات','framework');
                }
                break;
            case 'id':
                $Prop_id = get_post_meta($post->ID,'REAL_HOMES_property_id',true);
                if(!empty($Prop_id)){
                    echo $Prop_id;
                }
                else{
                    _e('NA','framework');
                }
                break;
            case 'city':
                echo get_the_term_list($post->ID,'property-city', '', ', ','');
                break;
            case 'address':
                $address = get_post_meta($post->ID,'REAL_HOMES_property_address',true);
                if(!empty($address)){
                    echo $address;
                }
                else{
                    _e('No Address Provided!','framework');
                }
                break;
            case 'type':
                echo get_the_term_list($post->ID,'property-type', '', ', ','');
                break;
            case 'status':
                echo get_the_term_list($post->ID,'property-status', '', ', ','');
                break;
            case 'price':
                property_price();
                break;
            case 'bed':
                $bed = get_post_meta($post->ID,'REAL_HOMES_property_bedrooms',true);
                if(!empty($bed)){
                    echo $bed;
                }
                else{
                    _e('NA','framework');
                }
                break;
            case 'bath':
                $bath = get_post_meta($post->ID,'REAL_HOMES_property_bathrooms',true);
                if(!empty($bath)){
                    echo $bath;
                }
                else{
                    _e('NA','framework');
                }
                break;
            case 'garage':
                $garage = get_post_meta($post->ID,'REAL_HOMES_property_garage',true);
                if(!empty($garage)){
                    echo $garage;
                }
                else{
                    _e('NA','framework');
                }
                break;
            case 'features':
                echo get_the_term_list($post->ID,'property-feature', '', ', ','');
                break;
        }
    }
}
add_action("manage_pages_custom_column", "property_custom_columns");


/*-----------------------------------------------------------------------------------*/
/*	Add Metabox to Display Property Payment Information
/*-----------------------------------------------------------------------------------*/
add_action( 'add_meta_boxes', 'add_payment_meta_box' );

if( !function_exists( 'add_payment_meta_box' ) ){
    function add_payment_meta_box(){
        add_meta_box( 'payment-meta-box', __('Payment Information', 'framework'), 'payment_meta_box', 'property', 'normal', 'core' );
    }
}

if( !function_exists( 'payment_meta_box' ) ){
    function payment_meta_box( $post ){

        $values = get_post_custom( $post->ID );
        $not_available  = __('Not Available','framework');

        $txn_id         = isset( $values['txn_id'] ) ? esc_attr( $values['txn_id'][0] ) : $not_available;
        $payment_date   = isset( $values['payment_date'] ) ? esc_attr( $values['payment_date'][0] ) : $not_available;
        $payer_email    = isset( $values['payer_email'] ) ? esc_attr( $values['payer_email'][0] ) : $not_available;
        $first_name     = isset( $values['first_name'] ) ? esc_attr( $values['first_name'][0] ) : $not_available;
        $last_name      = isset( $values['last_name'] ) ? esc_attr( $values['last_name'][0] ) : $not_available;
        $payment_status = isset( $values['payment_status'] ) ? esc_attr( $values['payment_status'][0] ) : $not_available;
        $payment_gross  = isset( $values['payment_gross'] ) ? esc_attr( $values['payment_gross'][0] ) : $not_available;
        $payment_currency  = isset( $values['mc_currency'] ) ? esc_attr( $values['mc_currency'][0] ) : $not_available;

        ?>
        <table style="width:100%;">
            <tr>
                <td style="width:25%; vertical-align: top;"><strong><?php _e('Transaction ID','framework');?></strong></td>
                <td style="width:75%;"><?php echo $txn_id; ?></td>
            </tr>
            <tr>
                <td style="width:25%; vertical-align: top;"><strong><?php _e('Payment Date','framework');?></strong></td>
                <td style="width:75%;"><?php echo $payment_date; ?></td>
            </tr>
            <tr>
                <td style="width:25%; vertical-align: top;"><strong><?php _e('First Name','framework');?></strong></td>
                <td style="width:75%;"><?php echo $first_name; ?></td>
            </tr>
            <tr>
                <td style="width:25%; vertical-align: top;"><strong><?php _e('Last Name','framework');?></strong></td>
                <td style="width:75%;"><?php echo $last_name; ?></td>
            </tr>
            <tr>
                <td style="width:25%; vertical-align: top;"><strong><?php _e('Payer Email','framework');?></strong></td>
                <td style="width:75%;"><?php echo $payer_email; ?></td>
            </tr>
            <tr>
                <td style="width:25%; vertical-align: top;"><strong><?php _e('Payment Status','framework');?></strong></td>
                <td style="width:75%;"><?php echo $payment_status; ?></td>
            </tr>
            <tr>
                <td style="width:25%; vertical-align: top;"><strong><?php _e('Payment Amount','framework');?></strong></td>
                <td style="width:75%;"><?php echo $payment_gross; ?></td>
            </tr>
            <tr>
                <td style="width:25%; vertical-align: top;"><strong><?php _e('Payment Currency','framework');?></strong></td>
                <td style="width:75%;"><?php echo $payment_currency; ?></td>
            </tr>
        </table>
        <?php
    }
}

/*-----------------------------------------------------------------------------------*/
/*	Search support for Property ID on its index page (backend)
/*-----------------------------------------------------------------------------------*/

// Confirm page
function is_prop_index(){
    global $pagenow;
    return ( is_admin() && $pagenow == 'edit.php' && $_GET['post_type'] == 'property' && $_GET['s'] != '');
}

// Join the Post Meta table
function inspiry_search_join($join) {
    global $wpdb;
    if (is_prop_index()) {
        $join .= 'LEFT JOIN ' . $wpdb->postmeta . ' ON '. $wpdb->posts . '.ID = ' . $wpdb->postmeta . '.post_id ';
    }
    return $join;
}

// Add the Property ID in search
function inspiry_search_where($where) {
    global $wpdb;
    if (is_prop_index()) {
        $where = preg_replace(
            "/\(\s*".$wpdb->posts.".post_title\s+LIKE\s*(\'[^\']+\')\s*\)/",
            "(".$wpdb->posts.".post_title LIKE $1) OR (".$wpdb->postmeta.".meta_key = 'REAL_HOMES_property_id') AND (".$wpdb->postmeta.".meta_value LIKE $1)",
            $where );
    }
    return $where;
}

// Group the Properties
function inspiry_prop_limits($groupby) {
    global $wpdb;
    if (is_prop_index()) { $groupby = "$wpdb->posts.ID"; }
    return $groupby;
}

add_filter('posts_join', 'inspiry_search_join' );
add_filter( 'posts_where', 'inspiry_search_where' );
add_filter( 'posts_groupby', 'inspiry_prop_limits' );

?>
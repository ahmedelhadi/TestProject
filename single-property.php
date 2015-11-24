
<?php
get_header();

        // Banner Image
        $banner_image_path = "";
        $banner_image_id = get_post_meta( $post->ID, 'REAL_HOMES_page_banner_image', true );
        if( $banner_image_id ){
            $banner_image_path = wp_get_attachment_url($banner_image_id);
        }else{
            $banner_image_path = get_default_banner();
        }
        ?>
        <div class="page-head" style="background-repeat: no-repeat;background-position: center top;background-image: url('<?php echo $banner_image_path; ?>'); background-size: cover;">
            <?php if(!('true' == get_option('theme_banner_titles'))): ?>
            <div class="container">
                <div class="wrap clearfix">
                    <h1 class="page-title"><span><?php _e('Property Details', 'framework'); ?></span></h1>
                    <p><?php
                        the_title();

                        if( !function_exists('display_parent_locations') ){
                            function display_parent_locations($ct_trm){
                                if( !empty($ct_trm->parent) ){
                                    $parent_location = get_term( $ct_trm->parent, 'property-city' );
                                    echo ' - '. $parent_location->name;
                                    display_parent_locations($parent_location); // recursive call
                                }
                            }
                        }

                        /* Property City */
                        $city_terms = get_the_terms( $post->ID,"property-city" );
                        if(!empty($city_terms)){
                            foreach($city_terms as $ct_trm){
                                echo ' - '. $ct_trm->name;
                                display_parent_locations($ct_trm);
                                break;
                            }
                        }
                        ?></p>
                </div>
            </div>
            <?php endif; ?>
        </div><!-- End Page Head -->

        <!-- Content -->
        <div class="container contents detail">
            <div class="row">
<div class="span12 pagetitle clearfix">
<div class="span6">
<h1 class="titlezz"><?php
    the_title();
    if( !function_exists('display_parent_locations') ){
	    function display_parent_locations($ct_trm){
     		 if( !empty($ct_trm->parent) ){
                   	$parent_location = get_term( $ct_trm->parent, 'property-city' );
                 	echo ' - '. $parent_location->name;
                        display_parent_locations($parent_location); // recursive call
                        }
                   }
       }
?></h1>
<h5 class="price">         <span> 
                  <?php
                    $status_terms = get_the_terms( $post->ID,"property-status" );
                    $terms = array("For Sale"=>"للبيع","For Rent"=>"للإيجار");
                    if(!empty( $status_terms )){
                        $status_count = 0;
                        foreach( $status_terms as $term ){
                            if( $status_count > 0 ){
                                //echo ', ';
                            }
                            echo $terms[$term->name];
                            $status_count++;
                        }
                    }
                    ?>
</span>
</h5>



<h5 class="price">         <span>                <?php                /* Property Price */                property_price();                ?>            </span>        </h5></div>   
<div class="span3 propertypid">
<?php
    /* Property ID if exists */
    $property_id = get_post_meta($post->ID, 'REAL_HOMES_property_id', true);
    if(!empty($property_id)){
    echo __('رقم العقار ','framework').' '.$property_id;
     }
?>
</div>				
<div class="span3 propertyprev">
    <div class="property-meta clearfix">
                <?php $url = get_permalink() ;
             echo '<img class="parcode" src="https://chart.googleapis.com/chart?chs=100x100&amp;cht=qr&amp;chl='.$url.'" />' ;
        ?>

        <!-- Add to favorite -->
        <!--
        <span class="add-to-fav">
            <?php
            if( is_user_logged_in() ){
                $user_id = get_current_user_id();
                $property_id = get_the_ID();
                if( is_added_to_favorite( $user_id, $property_id ) ){
                    ?>
                    <div id="fav_output" class="show"><i class="fa fa-star dim"></i>&nbsp;<span id="fav_target" class="dim"><?php _e('يضاف إلى المفضلة','framework'); ?></span></div>
                    <?php
                }else{
                    ?>
                    <form action="<?php echo admin_url('admin-ajax.php'); ?>" method="post" id="add-to-favorite-form">
                        <input type="hidden" name="user_id" value="<?php echo $user_id; ?>" />
                        <input type="hidden" name="property_id" value="<?php echo $property_id; ?>" />
                        <input type="hidden" name="action" value="add_to_favorite" />
                    </form>
                    <div id="fav_output"><i class="fa fa-star dim"></i>&nbsp;<span id="fav_target" class="dim"></span></div>
                    <a id="add-to-favorite" href="#"><i class="fa fa-star"></i>&nbsp;<?php _e('إضافة إلى المفضلة','framework'); ?></a>
                    <?php
                }
            }else{
                ?><a href="#login-modal" data-toggle="modal"><i class="fa fa-star"></i>&nbsp;<?php _e('إضافة إلى المفضلة','framework'); ?></a><?php
            }
            ?>
        </span>
        -->
    </div>
</div>
</div>

                <div class="span6 main-wrap">
			<div class="infobar clearfix">
				<div class="span2">
			<?php
			if( !function_exists('display_parent_locations') ){
                            function display_parent_locations($ct_trm){
                                if( !empty($ct_trm->parent) ){
                                    $parent_location = get_term( $ct_trm->parent, 'property-city' );
                                    echo ' - '. $parent_location->name;
                                    display_parent_locations($parent_location); // recursive call
                                }
                            }
                        }
                        /* Property City */
                        $city_terms = get_the_terms( $post->ID,"property-city" );
                        if(!empty($city_terms)){
                            foreach($city_terms as $ct_trm){
                                echo ' المدينة : '. $ct_trm->name;
                                display_parent_locations($ct_trm);
                                break;
                            }
                        }
                        ?>
				</div>
				<div class="span3">
					<?php the_field('neighborhood'); ?>
				</div>
				<div class="span2">
					<span>الجهة:</span>
					<?php 
					$directions = array("any"=>"بعض","north"=>"شمال","east"=>"الشرق","west"=>"الغرب","south"=>"الجنوب");
					ob_start();
					the_field('direction'); 
					$dir = ob_get_clean();
					echo $directions[$dir];
					?>
				</div>
			</div>
                    <!-- Main Content -->
                    <div class="main">
                        <div id="overview">
                         <?php
                         if ( have_posts() ) :
                             while ( have_posts() ) :
                                the_post();

                             
                                /*
                                * 2. Property Information Bar, Icons Bar, Text Contents and Features
                                */
                                get_template_part('property-details/property-contents');

                                /*
                                * 3. Property Video
                                */
                                //get_template_part('property-details/property-video');

 
                                 /*
                                 * 5. Property Attachments
                                 */
                                 get_template_part('property-details/property-attachments');

                                 /*
                                 * 6. Child Properties
                                 */
                                 get_template_part('property-details/property-children');

                                

                             endwhile;
                         endif;
                         ?>
                        </div>
                    </div><!-- End Main Content -->

                    

                </div> <!-- End span6 -->
<div class="span6 main-wrap">
	<!-- Main Content -->
	<div class="main">
		<div id="overview">



<ul class="nav nav-tabs" role="tablist" id="myTab">
  <li ><a href="#photo_gallery" role="tab" data-toggle="tab"> معرض الصور</a></li>
  <li class="active"><a href="#property_map1" role="tab" data-toggle="tab"> خريطة العقار</a></li>  
  <li><a href="#video1" role="tab" data-toggle="tab"> الفيديو </a></li>
</ul>

<div class="tab-content">
  <div class="tab-pane " id="photo_gallery">
<?php
/*
                                * 1. Property Images Slider
                                */
                                 $gallery_slider_type = get_post_meta($post->ID, 'REAL_HOMES_gallery_slider_type', true);
                                 /* For demo purpose only */
                                 if(isset($_GET['slider-type'])){
                                     $gallery_slider_type = $_GET['slider-type'];
                                 }
                                 if( $gallery_slider_type == 'thumb-on-bottom' ){
                                     get_template_part('property-details/property-slider-two');
                                 }else{
                                     get_template_part('property-details/property-slider');

                                     //get_template_part('property-details/property-slider');
                                 }
?>
  </div>
  <div class="tab-pane active" id="property_map1">
		                <?php  get_template_part('property-details/property-map');  ?>
  </div>      
  <div class="tab-pane" id="video1">		                
    <?php 
        get_template_part('property-details/property-video');				 
    ?>  
</div>  
</div>
				<?php 



 				 /*
                                 * 7. Property Agent
                                 */
                                 $theme_property_detail_variation = get_option('theme_property_detail_variation');
                                 /* For demo purpose only */
                                 if(isset($_GET['variation'])){
                                     $theme_property_detail_variation = $_GET['variation'];
                                 }
                                 if( $theme_property_detail_variation != "agent-in-sidebar" ){
                                    get_template_part('property-details/property-agent');
                                 }

?>

</div>
</div>
</div>
<div class="span12">
<?php
                    /*
                     * 8. Similar Properties
                     */
                    get_template_part('property-details/similar-properties');
                    ?>
</div>
                <?php
                if( $theme_property_detail_variation == "agent-in-sidebar" ) {
                    ?>
                    <div class="span3 sidebar-wrap">
                        <!-- Sidebar -->
                        <aside class="sidebar">
                            <?php get_template_part('property-details/property-agent-for-sidebar'); ?>
                        </aside>
                        <!-- End Sidebar -->
                    </div>
                    <?php
                }else{
                    get_sidebar('property');
                }
                ?>

            </div><!-- End contents row -->
        </div><!-- End Content -->
<script>
    $(function() {
        $( "#tabs" ).tabs();
    });
    </script>
<?php get_footer(); ?>



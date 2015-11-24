<article class="property-item clearfix">

    <div class="wrap clearfix">



    </div>







<div class="content1 clearfix">
<?php

$detail_titles = get_post_meta($post->ID,'REAL_HOMES_detail_titles',true);
        if( !empty($detail_titles) ){
            $detail_values = get_post_meta($post->ID,'REAL_HOMES_detail_values',true);
            if( !empty($detail_values) ){
                $details = array_combine($detail_titles, $detail_values);

                $additional_details_title = get_option('theme_additional_details_title');
                if( !empty($additional_details_title) ){
                    echo '<h4 class="additional-title">'.$additional_details_title.'</h4>';
                }

                echo '<ul class="additional-details clearfix">';
                foreach($details as $title => $value ){
                    ?>
                    <li>
                        <span><?php echo $value; ?></span>
                        <strong>: <?php echo $title; ?></strong>

                    </li>
                    <?php
                }
                echo '</ul>';
            }
        }
        ?>

</div>

<div class="content1 clearfix">

    <h4>تفاصيل موقع العقار</h4>
<li><span>شمال</span> : <?php the_field('property_north'); ?></li>      
<li><span>جنوب</span> : <?php the_field('property_south'); ?></li>
<li><span>شرق </span>  : <?php the_field('property_east'); ?></li>
<li><span>غرب </span>  : <?php the_field('property_west'); ?></li>
<li><span>خط طول</span>  :  <?php the_field('property_longitude'); ?> </li>
<li><span>خط عرض</span> :  <?php the_field('property_latitude'); ?></li>

	<?php //the_field('location_details'); ?></div>
    <?php
    /* Property Features */
    $features_terms = get_the_terms( $post->ID,"property-feature" );
    if(!empty($features_terms)){
        ?>
        <div class="features">
            <?php
            $property_features_title = get_option('theme_property_features_title');
            if(!empty($property_features_title)){
                ?><h4 class="title"><?php echo $property_features_title; ?></h4><?php
            }
            ?>
            <ul class="arrow-bullet-list clearfix">
            <?php
            foreach($features_terms as $fet_trms){
                echo '<li><a href="'.get_term_link($fet_trms->slug, 'property-feature').'">'.$fet_trms->name.'</a></li>';
            }
            ?>
            </ul>
        </div>
        <?php
    }
    ?>
<div class="content1 min_height clearfix">
	<?php the_field('other_details'); ?>
</div><div class="share-networks clearfix">                    <span class="share-label"><?php _e('شارك العقار', 'framework'); ?></span>                    <span><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=<?php the_permalink(); ?>"><i class="fa fa-facebook fa-lg"></i><?php _e('الفيسبوك','framework'); ?></a></span>                    <span><a target="_blank" href="https://twitter.com/share?url=<?php the_permalink(); ?>" ><i class="fa fa-twitter fa-lg"></i><?php _e('تويتر','framework'); ?></a></span>                    <span><a target="_blank" href="https://plus.google.com/share?url={<?php the_permalink(); ?>}" onclick="javascript:window.open(this.href,  '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes')"><i class="fa fa-google-plus fa-lg"></i><?php _e('قوقل','framework'); ?></a></span>                </div>
</article>
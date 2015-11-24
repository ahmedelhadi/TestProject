<div class="span4 ">
    <article class="property-item clearfix">
        <?php
        if(has_post_thumbnail($post->ID)){
            ?>
            <figure>
                <a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>">
                    <?php
                    the_post_thumbnail('property-thumb-image',array(
                        'alt'	=> get_the_title($post->ID),
                        'title'	=> get_the_title($post->ID)
                    ));
                    ?>
                </a>

            </figure>
        <?php
        }
        ?>
<div class="clearfix"></div>
        <div class="prop_title">
        <a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>"><?php the_title(); ?></a>
        </div>
        <div class="prop_id">
            <?php





            /* Property ID if exists */

            $property_id = get_post_meta($post->ID, 'REAL_HOMES_property_id', true);

            if(!empty($property_id)){

                echo __('رقم العقار','framework').' '.$property_id;

            }

            ?>
        </div>
        <div class="detail_1">
<div class="clearfix"></div>
<div style="float: right; text-align: center;">
<h5><?php
        echo __('المساحة','framework').' : '.$REAL_HOMES_property_size;
	$post_meta_data = get_post_custom($post->ID);
        if( !empty($post_meta_data['REAL_HOMES_property_size'][0]) ) {
                $prop_size = $post_meta_data['REAL_HOMES_property_size'][0];
                echo '<span><i class="icon-area"></i>';
                echo $prop_size;
                if( !empty($post_meta_data['REAL_HOMES_property_size_postfix'][0]) ){
                    $prop_size_postfix = $post_meta_data['REAL_HOMES_property_size_postfix'][0];
                    echo '&nbsp;'.$prop_size_postfix;
                }
                echo '</span>';
        }

?></h5>
            <h5 class="price">
                <?php
                      echo __('السعر ','framework').' : '; property_price();
                $type_terms = get_the_terms( $post->ID,"property-type" );
                if(!empty($type_terms)){
                    echo '<small> - ';
                    foreach($type_terms as $term){
                        echo $term->name;
                        break;
                    }
                    echo '</small>';
                }
                ?>
            </h5>
</div>
<div style="float: left; width: 15%;margin-top: 20px;color: #5e090a;" >
                <figcaption>
                    <?php
                    $status_terms = get_the_terms( $post->ID,"property-status" );
					$terms = array("For Sale"=>"للبيع","For Rent"=>"للإيجار");
                    if(!empty( $status_terms )){
                        $status_count = 0;
                        foreach( $status_terms as $term ){
                            if( $status_count > 0 ){
                                echo ', ';
                            }
                            echo $terms[$term->name];
                            $status_count++;
                        }
                    }
                    ?>
                </figcaption>
</div>
        </div>

        <div class="property-meta">
            <?php get_template_part('property-details/property-metas'); ?>
        </div>

	<a class="more-details1" href="<?php the_permalink() ?>"><?php _e('تفاصيل أكثر ','framework'); ?><i class="fa fa-caret-left"></i></a>

    </article>
</div>
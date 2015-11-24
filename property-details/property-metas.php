<?php
        $post_meta_data = get_post_custom($post->ID);



        if( !empty($post_meta_data['REAL_HOMES_property_bedrooms'][0]) ) {
                $prop_bedrooms = floatval($post_meta_data['REAL_HOMES_property_bedrooms'][0]);
                $bedrooms_label = ($prop_bedrooms > 1)? __('غرف نوم','framework' ): __('غرف نوم','framework');
                echo '<span><i class="icon-bed"></i>'. $prop_bedrooms .'&nbsp;'.$bedrooms_label.'</span>';
        }

        if( !empty($post_meta_data['REAL_HOMES_property_bathrooms'][0]) ) {
                $prop_bathrooms = floatval($post_meta_data['REAL_HOMES_property_bathrooms'][0]);
                $bathrooms_label = ($prop_bathrooms > 1)?__('دورات مياه','framework' ): __('دورات مياه','framework');
                echo '<span><i class="icon-bath"></i>'. $prop_bathrooms .'&nbsp;'.$bathrooms_label.'</span>';
        }

        if( !empty($post_meta_data['REAL_HOMES_property_garage'][0]) ) {
                $prop_garage = floatval($post_meta_data['REAL_HOMES_property_garage'][0]);
                $garage_label = ($prop_garage > 1)?__('كراج ','framework' ): __('كراج ','framework');
                echo '<span><i class="icon-garage"></i>'. $prop_garage .'&nbsp;'.$garage_label.'</span>';
        }

  ?>
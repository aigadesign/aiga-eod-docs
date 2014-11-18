As the site is a standard Wordpress install, the settings are managed via the Wordpress admin.

## Custom Settings

Two custom fields were added to the Setting > General page to allow the admin to update the address in the footer and enable the newsletter icons.

### Footer Address

To edit the address in the footer go to Settings > General and then scroll to the bottom of the page where you will find a field with the label ‘Footer Address Line’. Update this field to change the address in the footer.

The default value at launch was:

{% highlight html %}
© Copyright 2014  ·  AIGA  164 Fifth Avenue, New York, NY 10010  ·  212 807 1990
{% endhighlight %}

### Newsletter Icon

To configure the newsletter icon on the bottom of the About page and in the footer go to Settings > General and then scroll to the bottom of the page where you will find a field with the label ‘Newsletter URL’. Update this field to the URL where the newsletter icon should link to, e.g. `http://my.aiga.org`.

When this field is completely empty the newsletter icon will not be shown.

The default value at launch was blank.

## Custom Bulk/Quick

*Note: This plugin has been deactivated due to an unresolved field duplication bug*.

The Custom Bulk/Quick Edit plugin allows you to add extra fields to the Quick Edit box. In order to add a custom field you must first configure the field via code, by adding the following to `functions.php` inside the Stencil theme folder, replacing `heading_sub_heading` with the custom field you wish to add.

{% highlight php %}
add_filter( 'manage_post_posts_columns', 'stencil_manage_post_posts_columns' );
function stencil_manage_post_posts_columns( $columns ) {
  $columns['heading_sub_heading'] = esc_html__( 'Sub Heading' );

  return $columns;
}
{% endhighlight %}

Note: All custom fields can be found at the top of the `functions.php` file.
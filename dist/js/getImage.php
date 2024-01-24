<!-- getImage.php -->

<?php
$imageFolder =
    'C:\Users\gheri\OneDrive\Desktop\Lut fech\Front-end\modern-portfolio\dist\img\nature'; // Change this to the path of your image folder
$allowedExtensions = ['jpg', 'jpeg', 'png', 'gif']; // Add more extensions if needed

$images = [];

foreach ($allowedExtensions as $extension) {
    $images = array_merge($images, glob($imageFolder . '/*.' . $extension));
}

$numberOfImages = 12;

echo "Number of images in the folder: $numberOfImages";


?>

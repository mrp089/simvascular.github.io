## Model Description

The aortofemoral model extends from the ascending or thoracic aorta to the femoral arteries. Using **Simvascular** and the image data above, the geometrical models are generated by selecting centerline paths along the vessels, creating 2D segmentations along each of these paths, and then lofting the segmentations together to create a solid model. A separate solid model was created for each vessel and Boolean addition was used to generate a single model representing the complete aortofemoral model. The vessel junctions were then blended to create a smoothed model.

**Geometric model details**

<table class="table table-bordered">
<thead>
<tr>
  <th>Number of inlets</th>
  <th>Number of outlets</th>
  <th>Volume(cm<sup>3</sup>)</th>
  <th>Surface Area(cm<sup>2</sup>)</th>
  <th>Number of Vessel Paths</th>
  <th>Number of 2-D Segmentations</th>
</tr>
</thead>
<tr>
  <td>1</td>
  <td>17</td>
  <td>128.8597</td>
  <td>443.9319</td>
  <td>18</td>
  <td>198</td>
</tr>
</table>

**Physiological Assumption**

<table class="table table-bordered">
<thead>
<tr>
  <th>Blood Viscosity</th>
  <th>Blood Density</th>
</tr>
</thead>
<tr>
  <td>0.04 g/cm•s<sup>2</sup></td>
  <td>1.06 g/cm<sup>3</sup></td>
</tr>
</table>

**Vessel Paths:**

<figure>
  <img class="svImg svImgMd" src="/clinical/aortofemoral2/imgs/paths.jpg"> 
  <figcaption class="svCaption" ></figcaption>
</figure>

**Vessel Segmentations:**

<figure>
  <img class="svImg svImgMd" src="/clinical/aortofemoral2/imgs/segmentations.jpg"> 
  <figcaption class="svCaption" ></figcaption>
</figure>

**Vessel Geometric Model:**

<figure>
  <img class="svImg svImgMd" src="/clinical/aortofemoral2/imgs/model.jpg"> 
  <figcaption class="svCaption" ></figcaption>
</figure>
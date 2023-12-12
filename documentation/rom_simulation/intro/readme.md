# Introduction

The SimVascular **ROM Simulation Tool** is used to interactively create the geometry, boundary conditions and solver
parameters needed to execute a reduced-order model (ROM) simulation of 3D vascular networks. The reduced-order models
implemented in SimVascular use computationally inexpensive mathematical representations and reduced model dimensionality
to approximate the flow and pressure quantities in a cardiovascular system.

The SimVascular **sv1DSolver** solves for blood pressure and flow in deformable one-dimensional hemodynamic networks.
These equations offer a relatively efficient means to reproduce realistic wave propagation phenomemon in vascular networks.
One-dimensional networks can be coupled to both 0D lumped parameter models and to more complex 3D flow simulations as boundary
conditions.

The SimVascular **svZeroDSolver** solves for blood pressure and flow in a zero-dimensional spatial representation of
a vascular network modeled as an electrical circuit. The resistive, elastic and inertial properties of blood flow through
vessels are lumped into electrical elements. Although no spatial distribution of flow quantities is provided
this ROM can be complex enough to provide a good approximatation of circulatory dynamics.

## Centerlines Geometry

The geometry of the vascular networks used by **1D** and **0D** solvers is based on the centerlines computed from the surface
of a 3D geometric model. The 3D geometric model is created from image data using the typical
SimVascular <a href="modeling.html"> modeling workflow</a>.

Centerlines represent a 1D characterization of blood vessel geometry. The centerlines are computed for a 3D surface using
the <a href="http://www.vmtk.org/tutorials/Centerlines.html"> Vascular Modeling Toolkit</a>. The computation solves a wave propagation
problem using a source point representing the start of the centerlines and target points representing the ends of the centerlines.
The source and target points are selected from the model caps defined in the SimVascular **Modeling Tool**.

<br>
<figure>
  <img src="/documentation/rom_simulation/images/model-geom.png" style="float: left; width: 30%; margin-right: 1%; margin-bottom: 0.5em;">
  <img src="/documentation/rom_simulation/images/centerlines.png" style="float: left; width: 30%; margin-right: 1%; margin-bottom: 0.5em;">
  <p style="clear: both;">
  <figcaption> <i>The centerlines (right) computed from a 3D geometric model of the aorta and femoral arteries (left). </i></figcaption>
</figure>
<br>

The centerline `.vtp` file contains a number of point arrays that contain useful information about the vascular network:
- **BifurcationId**: Junction number in junctions and $-1$ in branches
- **BifurcationIdTmp**: Internal junction number used during branch/junction splitting
- **BranchId**: Branch number in branches and $-1$ in junctions
- **BranchIdTmp**: Internal branch number used during branch/junction splitting
- **CenterlineId**: Contains an $n$-dimensional array for $n$ outlets (and thus $n$ centerlines). Here, each centerline is one inlet-outlet connection. The CenterlineId array is 1 on all points that belong to a centerline and 0 otherwise. A point can belong to several centerlines, e.g., all points on the inlet branch will belong to all centerlines.
- **CenterlineSectionBifurcation**: 1 if a point is inside a junction and 0 otherwise
- **CenterlineSectionNormal**: Normal vector to centerline sections, obtained from the tangent vector to the centerline
- **GlobalNodeId**: Sequential numbering of centerline points
- **Path**: Starts from zero in every branch and contains the path length along the centerline

Arrays inherited from [vmtkcenterlinesections](https://www.vmtk.org/vmtkscripts/vmtkcenterlinesections.html):
- **CenterlineSectionArea**: Cross-sectional area of the vessel. Obtained from slicing the vessel at each centerline perpendicular to the centerline path.
- **CenterlineSectionClosed**: 1 if a section is closed and 0 otherwise
- **CenterlineSectionMaxSize**: Maximum diameter of each section
- **CenterlineSectionMinSize**: Minimum diameter of each section
- **CenterlineSectionShape**: Shape index, i.e. the ratio between minimum and maximum diameter

Array inherited from [vmtkcenterlines](https://www.vmtk.org/vmtkscripts/vmtkcenterlines.html):
- **MaximumInscribedSphereRadius**: Radius values of maximal inscribed spheres

### Network Geometry and 1D Simulation Mesh

The centerlines geometry is used to define network **nodes** at vessel inlets, outlets and branching points. A number of cylindrical
**segments** are defined representing the length and diameter between vessel **nodes**.

<br>
<figure>
  <img class="svImg svImgSm" src="/documentation/rom_simulation/images/vessel-segments.png">
  <figcaption class="svCaption"> The cylindrical segments representing vessel length and diameter between branching points. </figcaption>
</figure>
<br>

Segments are then discretized into a mesh of finite elements in order to numerically solve the 1D equations of fluid flow in
deformable vessels.

<br>
<figure>
  <img class="svImg svImgMd" src="/documentation/rom_simulation/images/segment-elements.png">
  <figcaption class="svCaption"> A segment is discretized into a mesh of finite elements. </figcaption>
</figure>
<br>

### Network Connectivity and 0D Simulation Circuit

The centerlines geometry is also used to define the connectivty for a 0D electrical circuit.

## Units

All model quantities and associated boundary conditions are specified in CGS units.

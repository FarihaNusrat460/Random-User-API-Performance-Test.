/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 750.0, "minX": 0.0, "maxY": 15520.0, "series": [{"data": [[0.0, 750.0], [0.1, 751.0], [0.2, 752.0], [0.3, 752.0], [0.4, 753.0], [0.5, 753.0], [0.6, 753.0], [0.7, 753.0], [0.8, 754.0], [0.9, 754.0], [1.0, 754.0], [1.1, 754.0], [1.2, 754.0], [1.3, 755.0], [1.4, 755.0], [1.5, 755.0], [1.6, 755.0], [1.7, 755.0], [1.8, 755.0], [1.9, 755.0], [2.0, 755.0], [2.1, 755.0], [2.2, 756.0], [2.3, 756.0], [2.4, 756.0], [2.5, 756.0], [2.6, 756.0], [2.7, 756.0], [2.8, 756.0], [2.9, 756.0], [3.0, 756.0], [3.1, 756.0], [3.2, 756.0], [3.3, 757.0], [3.4, 757.0], [3.5, 757.0], [3.6, 757.0], [3.7, 757.0], [3.8, 757.0], [3.9, 757.0], [4.0, 757.0], [4.1, 757.0], [4.2, 757.0], [4.3, 757.0], [4.4, 757.0], [4.5, 758.0], [4.6, 758.0], [4.7, 758.0], [4.8, 758.0], [4.9, 758.0], [5.0, 758.0], [5.1, 758.0], [5.2, 758.0], [5.3, 758.0], [5.4, 758.0], [5.5, 758.0], [5.6, 758.0], [5.7, 758.0], [5.8, 758.0], [5.9, 759.0], [6.0, 759.0], [6.1, 759.0], [6.2, 759.0], [6.3, 759.0], [6.4, 759.0], [6.5, 759.0], [6.6, 759.0], [6.7, 759.0], [6.8, 759.0], [6.9, 759.0], [7.0, 759.0], [7.1, 759.0], [7.2, 759.0], [7.3, 759.0], [7.4, 759.0], [7.5, 760.0], [7.6, 760.0], [7.7, 760.0], [7.8, 760.0], [7.9, 760.0], [8.0, 760.0], [8.1, 760.0], [8.2, 760.0], [8.3, 760.0], [8.4, 760.0], [8.5, 760.0], [8.6, 760.0], [8.7, 760.0], [8.8, 760.0], [8.9, 760.0], [9.0, 761.0], [9.1, 761.0], [9.2, 761.0], [9.3, 761.0], [9.4, 761.0], [9.5, 761.0], [9.6, 761.0], [9.7, 761.0], [9.8, 761.0], [9.9, 761.0], [10.0, 761.0], [10.1, 761.0], [10.2, 761.0], [10.3, 761.0], [10.4, 761.0], [10.5, 761.0], [10.6, 761.0], [10.7, 761.0], [10.8, 761.0], [10.9, 762.0], [11.0, 762.0], [11.1, 762.0], [11.2, 762.0], [11.3, 762.0], [11.4, 762.0], [11.5, 762.0], [11.6, 762.0], [11.7, 762.0], [11.8, 762.0], [11.9, 762.0], [12.0, 762.0], [12.1, 762.0], [12.2, 762.0], [12.3, 762.0], [12.4, 762.0], [12.5, 762.0], [12.6, 762.0], [12.7, 763.0], [12.8, 763.0], [12.9, 763.0], [13.0, 763.0], [13.1, 763.0], [13.2, 763.0], [13.3, 763.0], [13.4, 763.0], [13.5, 763.0], [13.6, 763.0], [13.7, 763.0], [13.8, 763.0], [13.9, 763.0], [14.0, 763.0], [14.1, 763.0], [14.2, 763.0], [14.3, 763.0], [14.4, 763.0], [14.5, 763.0], [14.6, 764.0], [14.7, 764.0], [14.8, 764.0], [14.9, 764.0], [15.0, 764.0], [15.1, 764.0], [15.2, 764.0], [15.3, 764.0], [15.4, 764.0], [15.5, 764.0], [15.6, 764.0], [15.7, 764.0], [15.8, 764.0], [15.9, 764.0], [16.0, 764.0], [16.1, 764.0], [16.2, 764.0], [16.3, 764.0], [16.4, 764.0], [16.5, 764.0], [16.6, 764.0], [16.7, 765.0], [16.8, 765.0], [16.9, 765.0], [17.0, 765.0], [17.1, 765.0], [17.2, 765.0], [17.3, 765.0], [17.4, 765.0], [17.5, 765.0], [17.6, 765.0], [17.7, 765.0], [17.8, 765.0], [17.9, 765.0], [18.0, 765.0], [18.1, 765.0], [18.2, 765.0], [18.3, 765.0], [18.4, 765.0], [18.5, 765.0], [18.6, 765.0], [18.7, 765.0], [18.8, 765.0], [18.9, 766.0], [19.0, 766.0], [19.1, 766.0], [19.2, 766.0], [19.3, 766.0], [19.4, 766.0], [19.5, 766.0], [19.6, 766.0], [19.7, 766.0], [19.8, 766.0], [19.9, 766.0], [20.0, 766.0], [20.1, 766.0], [20.2, 766.0], [20.3, 766.0], [20.4, 766.0], [20.5, 766.0], [20.6, 766.0], [20.7, 766.0], [20.8, 766.0], [20.9, 766.0], [21.0, 766.0], [21.1, 766.0], [21.2, 767.0], [21.3, 767.0], [21.4, 767.0], [21.5, 767.0], [21.6, 767.0], [21.7, 767.0], [21.8, 767.0], [21.9, 767.0], [22.0, 767.0], [22.1, 767.0], [22.2, 767.0], [22.3, 767.0], [22.4, 767.0], [22.5, 767.0], [22.6, 767.0], [22.7, 767.0], [22.8, 767.0], [22.9, 767.0], [23.0, 767.0], [23.1, 767.0], [23.2, 767.0], [23.3, 767.0], [23.4, 767.0], [23.5, 768.0], [23.6, 768.0], [23.7, 768.0], [23.8, 768.0], [23.9, 768.0], [24.0, 768.0], [24.1, 768.0], [24.2, 768.0], [24.3, 768.0], [24.4, 768.0], [24.5, 768.0], [24.6, 768.0], [24.7, 768.0], [24.8, 768.0], [24.9, 768.0], [25.0, 768.0], [25.1, 768.0], [25.2, 768.0], [25.3, 768.0], [25.4, 768.0], [25.5, 768.0], [25.6, 768.0], [25.7, 768.0], [25.8, 768.0], [25.9, 768.0], [26.0, 769.0], [26.1, 769.0], [26.2, 769.0], [26.3, 769.0], [26.4, 769.0], [26.5, 769.0], [26.6, 769.0], [26.7, 769.0], [26.8, 769.0], [26.9, 769.0], [27.0, 769.0], [27.1, 769.0], [27.2, 769.0], [27.3, 769.0], [27.4, 769.0], [27.5, 769.0], [27.6, 769.0], [27.7, 769.0], [27.8, 769.0], [27.9, 769.0], [28.0, 769.0], [28.1, 769.0], [28.2, 769.0], [28.3, 769.0], [28.4, 770.0], [28.5, 770.0], [28.6, 770.0], [28.7, 770.0], [28.8, 770.0], [28.9, 770.0], [29.0, 770.0], [29.1, 770.0], [29.2, 770.0], [29.3, 770.0], [29.4, 770.0], [29.5, 770.0], [29.6, 770.0], [29.7, 770.0], [29.8, 770.0], [29.9, 770.0], [30.0, 770.0], [30.1, 770.0], [30.2, 770.0], [30.3, 770.0], [30.4, 770.0], [30.5, 770.0], [30.6, 770.0], [30.7, 771.0], [30.8, 771.0], [30.9, 771.0], [31.0, 771.0], [31.1, 771.0], [31.2, 771.0], [31.3, 771.0], [31.4, 771.0], [31.5, 771.0], [31.6, 771.0], [31.7, 771.0], [31.8, 771.0], [31.9, 771.0], [32.0, 771.0], [32.1, 771.0], [32.2, 771.0], [32.3, 771.0], [32.4, 771.0], [32.5, 771.0], [32.6, 771.0], [32.7, 771.0], [32.8, 771.0], [32.9, 771.0], [33.0, 771.0], [33.1, 771.0], [33.2, 772.0], [33.3, 772.0], [33.4, 772.0], [33.5, 772.0], [33.6, 772.0], [33.7, 772.0], [33.8, 772.0], [33.9, 772.0], [34.0, 772.0], [34.1, 772.0], [34.2, 772.0], [34.3, 772.0], [34.4, 772.0], [34.5, 772.0], [34.6, 772.0], [34.7, 772.0], [34.8, 772.0], [34.9, 772.0], [35.0, 772.0], [35.1, 772.0], [35.2, 772.0], [35.3, 772.0], [35.4, 772.0], [35.5, 772.0], [35.6, 773.0], [35.7, 773.0], [35.8, 773.0], [35.9, 773.0], [36.0, 773.0], [36.1, 773.0], [36.2, 773.0], [36.3, 773.0], [36.4, 773.0], [36.5, 773.0], [36.6, 773.0], [36.7, 773.0], [36.8, 773.0], [36.9, 773.0], [37.0, 773.0], [37.1, 773.0], [37.2, 773.0], [37.3, 773.0], [37.4, 773.0], [37.5, 773.0], [37.6, 773.0], [37.7, 773.0], [37.8, 773.0], [37.9, 774.0], [38.0, 774.0], [38.1, 774.0], [38.2, 774.0], [38.3, 774.0], [38.4, 774.0], [38.5, 774.0], [38.6, 774.0], [38.7, 774.0], [38.8, 774.0], [38.9, 774.0], [39.0, 774.0], [39.1, 774.0], [39.2, 774.0], [39.3, 774.0], [39.4, 774.0], [39.5, 774.0], [39.6, 774.0], [39.7, 774.0], [39.8, 774.0], [39.9, 774.0], [40.0, 774.0], [40.1, 774.0], [40.2, 775.0], [40.3, 775.0], [40.4, 775.0], [40.5, 775.0], [40.6, 775.0], [40.7, 775.0], [40.8, 775.0], [40.9, 775.0], [41.0, 775.0], [41.1, 775.0], [41.2, 775.0], [41.3, 775.0], [41.4, 775.0], [41.5, 775.0], [41.6, 775.0], [41.7, 775.0], [41.8, 775.0], [41.9, 775.0], [42.0, 775.0], [42.1, 775.0], [42.2, 775.0], [42.3, 775.0], [42.4, 775.0], [42.5, 776.0], [42.6, 776.0], [42.7, 776.0], [42.8, 776.0], [42.9, 776.0], [43.0, 776.0], [43.1, 776.0], [43.2, 776.0], [43.3, 776.0], [43.4, 776.0], [43.5, 776.0], [43.6, 776.0], [43.7, 776.0], [43.8, 776.0], [43.9, 776.0], [44.0, 776.0], [44.1, 776.0], [44.2, 776.0], [44.3, 776.0], [44.4, 776.0], [44.5, 776.0], [44.6, 776.0], [44.7, 776.0], [44.8, 777.0], [44.9, 777.0], [45.0, 777.0], [45.1, 777.0], [45.2, 777.0], [45.3, 777.0], [45.4, 777.0], [45.5, 777.0], [45.6, 777.0], [45.7, 777.0], [45.8, 777.0], [45.9, 777.0], [46.0, 777.0], [46.1, 777.0], [46.2, 777.0], [46.3, 777.0], [46.4, 777.0], [46.5, 777.0], [46.6, 777.0], [46.7, 777.0], [46.8, 778.0], [46.9, 778.0], [47.0, 778.0], [47.1, 778.0], [47.2, 778.0], [47.3, 778.0], [47.4, 778.0], [47.5, 778.0], [47.6, 778.0], [47.7, 778.0], [47.8, 778.0], [47.9, 778.0], [48.0, 778.0], [48.1, 778.0], [48.2, 778.0], [48.3, 778.0], [48.4, 778.0], [48.5, 778.0], [48.6, 778.0], [48.7, 779.0], [48.8, 779.0], [48.9, 779.0], [49.0, 779.0], [49.1, 779.0], [49.2, 779.0], [49.3, 779.0], [49.4, 779.0], [49.5, 779.0], [49.6, 779.0], [49.7, 779.0], [49.8, 779.0], [49.9, 779.0], [50.0, 779.0], [50.1, 779.0], [50.2, 779.0], [50.3, 779.0], [50.4, 779.0], [50.5, 780.0], [50.6, 780.0], [50.7, 780.0], [50.8, 780.0], [50.9, 780.0], [51.0, 780.0], [51.1, 780.0], [51.2, 780.0], [51.3, 780.0], [51.4, 780.0], [51.5, 780.0], [51.6, 780.0], [51.7, 780.0], [51.8, 780.0], [51.9, 780.0], [52.0, 781.0], [52.1, 781.0], [52.2, 781.0], [52.3, 781.0], [52.4, 781.0], [52.5, 781.0], [52.6, 781.0], [52.7, 781.0], [52.8, 781.0], [52.9, 781.0], [53.0, 781.0], [53.1, 781.0], [53.2, 781.0], [53.3, 781.0], [53.4, 781.0], [53.5, 782.0], [53.6, 782.0], [53.7, 782.0], [53.8, 782.0], [53.9, 782.0], [54.0, 782.0], [54.1, 782.0], [54.2, 782.0], [54.3, 782.0], [54.4, 782.0], [54.5, 782.0], [54.6, 782.0], [54.7, 782.0], [54.8, 782.0], [54.9, 783.0], [55.0, 783.0], [55.1, 783.0], [55.2, 783.0], [55.3, 783.0], [55.4, 783.0], [55.5, 783.0], [55.6, 783.0], [55.7, 783.0], [55.8, 783.0], [55.9, 783.0], [56.0, 783.0], [56.1, 783.0], [56.2, 783.0], [56.3, 784.0], [56.4, 784.0], [56.5, 784.0], [56.6, 784.0], [56.7, 784.0], [56.8, 784.0], [56.9, 784.0], [57.0, 784.0], [57.1, 784.0], [57.2, 784.0], [57.3, 784.0], [57.4, 784.0], [57.5, 784.0], [57.6, 785.0], [57.7, 785.0], [57.8, 785.0], [57.9, 785.0], [58.0, 785.0], [58.1, 785.0], [58.2, 785.0], [58.3, 785.0], [58.4, 785.0], [58.5, 785.0], [58.6, 785.0], [58.7, 786.0], [58.8, 786.0], [58.9, 786.0], [59.0, 786.0], [59.1, 786.0], [59.2, 786.0], [59.3, 786.0], [59.4, 786.0], [59.5, 786.0], [59.6, 786.0], [59.7, 786.0], [59.8, 786.0], [59.9, 787.0], [60.0, 787.0], [60.1, 787.0], [60.2, 787.0], [60.3, 787.0], [60.4, 787.0], [60.5, 787.0], [60.6, 787.0], [60.7, 787.0], [60.8, 787.0], [60.9, 788.0], [61.0, 788.0], [61.1, 788.0], [61.2, 788.0], [61.3, 788.0], [61.4, 788.0], [61.5, 788.0], [61.6, 788.0], [61.7, 788.0], [61.8, 789.0], [61.9, 789.0], [62.0, 789.0], [62.1, 789.0], [62.2, 789.0], [62.3, 789.0], [62.4, 789.0], [62.5, 789.0], [62.6, 789.0], [62.7, 790.0], [62.8, 790.0], [62.9, 790.0], [63.0, 790.0], [63.1, 790.0], [63.2, 790.0], [63.3, 790.0], [63.4, 790.0], [63.5, 790.0], [63.6, 791.0], [63.7, 791.0], [63.8, 791.0], [63.9, 791.0], [64.0, 791.0], [64.1, 791.0], [64.2, 791.0], [64.3, 791.0], [64.4, 791.0], [64.5, 792.0], [64.6, 792.0], [64.7, 792.0], [64.8, 792.0], [64.9, 792.0], [65.0, 792.0], [65.1, 792.0], [65.2, 792.0], [65.3, 793.0], [65.4, 793.0], [65.5, 793.0], [65.6, 793.0], [65.7, 793.0], [65.8, 793.0], [65.9, 793.0], [66.0, 793.0], [66.1, 794.0], [66.2, 794.0], [66.3, 794.0], [66.4, 794.0], [66.5, 794.0], [66.6, 794.0], [66.7, 795.0], [66.8, 795.0], [66.9, 795.0], [67.0, 795.0], [67.1, 795.0], [67.2, 795.0], [67.3, 796.0], [67.4, 796.0], [67.5, 796.0], [67.6, 796.0], [67.7, 796.0], [67.8, 796.0], [67.9, 797.0], [68.0, 797.0], [68.1, 797.0], [68.2, 797.0], [68.3, 797.0], [68.4, 798.0], [68.5, 798.0], [68.6, 798.0], [68.7, 798.0], [68.8, 798.0], [68.9, 799.0], [69.0, 799.0], [69.1, 799.0], [69.2, 799.0], [69.3, 799.0], [69.4, 799.0], [69.5, 800.0], [69.6, 800.0], [69.7, 800.0], [69.8, 800.0], [69.9, 800.0], [70.0, 801.0], [70.1, 801.0], [70.2, 801.0], [70.3, 802.0], [70.4, 802.0], [70.5, 802.0], [70.6, 802.0], [70.7, 802.0], [70.8, 803.0], [70.9, 803.0], [71.0, 803.0], [71.1, 803.0], [71.2, 804.0], [71.3, 804.0], [71.4, 804.0], [71.5, 804.0], [71.6, 804.0], [71.7, 805.0], [71.8, 805.0], [71.9, 805.0], [72.0, 806.0], [72.1, 806.0], [72.2, 806.0], [72.3, 807.0], [72.4, 807.0], [72.5, 807.0], [72.6, 808.0], [72.7, 808.0], [72.8, 808.0], [72.9, 809.0], [73.0, 809.0], [73.1, 809.0], [73.2, 810.0], [73.3, 810.0], [73.4, 810.0], [73.5, 811.0], [73.6, 811.0], [73.7, 811.0], [73.8, 812.0], [73.9, 812.0], [74.0, 812.0], [74.1, 813.0], [74.2, 813.0], [74.3, 814.0], [74.4, 814.0], [74.5, 815.0], [74.6, 815.0], [74.7, 815.0], [74.8, 816.0], [74.9, 816.0], [75.0, 817.0], [75.1, 817.0], [75.2, 818.0], [75.3, 819.0], [75.4, 819.0], [75.5, 820.0], [75.6, 820.0], [75.7, 821.0], [75.8, 822.0], [75.9, 823.0], [76.0, 824.0], [76.1, 825.0], [76.2, 826.0], [76.3, 826.0], [76.4, 827.0], [76.5, 827.0], [76.6, 828.0], [76.7, 829.0], [76.8, 830.0], [76.9, 831.0], [77.0, 831.0], [77.1, 832.0], [77.2, 833.0], [77.3, 834.0], [77.4, 835.0], [77.5, 836.0], [77.6, 837.0], [77.7, 838.0], [77.8, 839.0], [77.9, 840.0], [78.0, 841.0], [78.1, 842.0], [78.2, 843.0], [78.3, 844.0], [78.4, 845.0], [78.5, 847.0], [78.6, 848.0], [78.7, 849.0], [78.8, 850.0], [78.9, 851.0], [79.0, 852.0], [79.1, 854.0], [79.2, 855.0], [79.3, 856.0], [79.4, 858.0], [79.5, 859.0], [79.6, 860.0], [79.7, 862.0], [79.8, 863.0], [79.9, 864.0], [80.0, 866.0], [80.1, 868.0], [80.2, 869.0], [80.3, 871.0], [80.4, 873.0], [80.5, 875.0], [80.6, 877.0], [80.7, 879.0], [80.8, 881.0], [80.9, 884.0], [81.0, 885.0], [81.1, 886.0], [81.2, 888.0], [81.3, 890.0], [81.4, 891.0], [81.5, 893.0], [81.6, 895.0], [81.7, 897.0], [81.8, 900.0], [81.9, 902.0], [82.0, 904.0], [82.1, 907.0], [82.2, 909.0], [82.3, 913.0], [82.4, 915.0], [82.5, 917.0], [82.6, 920.0], [82.7, 925.0], [82.8, 931.0], [82.9, 937.0], [83.0, 940.0], [83.1, 944.0], [83.2, 948.0], [83.3, 952.0], [83.4, 954.0], [83.5, 959.0], [83.6, 962.0], [83.7, 966.0], [83.8, 968.0], [83.9, 970.0], [84.0, 974.0], [84.1, 977.0], [84.2, 981.0], [84.3, 984.0], [84.4, 986.0], [84.5, 989.0], [84.6, 992.0], [84.7, 994.0], [84.8, 997.0], [84.9, 1000.0], [85.0, 1003.0], [85.1, 1006.0], [85.2, 1010.0], [85.3, 1012.0], [85.4, 1014.0], [85.5, 1018.0], [85.6, 1021.0], [85.7, 1023.0], [85.8, 1026.0], [85.9, 1029.0], [86.0, 1032.0], [86.1, 1035.0], [86.2, 1039.0], [86.3, 1043.0], [86.4, 1048.0], [86.5, 1052.0], [86.6, 1057.0], [86.7, 1060.0], [86.8, 1063.0], [86.9, 1067.0], [87.0, 1070.0], [87.1, 1073.0], [87.2, 1075.0], [87.3, 1077.0], [87.4, 1079.0], [87.5, 1081.0], [87.6, 1083.0], [87.7, 1084.0], [87.8, 1086.0], [87.9, 1087.0], [88.0, 1088.0], [88.1, 1090.0], [88.2, 1091.0], [88.3, 1092.0], [88.4, 1093.0], [88.5, 1095.0], [88.6, 1096.0], [88.7, 1097.0], [88.8, 1097.0], [88.9, 1098.0], [89.0, 1099.0], [89.1, 1101.0], [89.2, 1102.0], [89.3, 1103.0], [89.4, 1104.0], [89.5, 1105.0], [89.6, 1106.0], [89.7, 1107.0], [89.8, 1108.0], [89.9, 1110.0], [90.0, 1111.0], [90.1, 1114.0], [90.2, 1116.0], [90.3, 1118.0], [90.4, 1120.0], [90.5, 1123.0], [90.6, 1125.0], [90.7, 1128.0], [90.8, 1131.0], [90.9, 1133.0], [91.0, 1138.0], [91.1, 1145.0], [91.2, 1149.0], [91.3, 1156.0], [91.4, 1162.0], [91.5, 1169.0], [91.6, 1175.0], [91.7, 1182.0], [91.8, 1190.0], [91.9, 1196.0], [92.0, 1203.0], [92.1, 1210.0], [92.2, 1222.0], [92.3, 1232.0], [92.4, 1244.0], [92.5, 1264.0], [92.6, 1290.0], [92.7, 1308.0], [92.8, 1321.0], [92.9, 1329.0], [93.0, 1332.0], [93.1, 1335.0], [93.2, 1341.0], [93.3, 1344.0], [93.4, 1347.0], [93.5, 1351.0], [93.6, 1354.0], [93.7, 1357.0], [93.8, 1363.0], [93.9, 1366.0], [94.0, 1373.0], [94.1, 1379.0], [94.2, 1386.0], [94.3, 1392.0], [94.4, 1407.0], [94.5, 1419.0], [94.6, 1437.0], [94.7, 1452.0], [94.8, 1475.0], [94.9, 1505.0], [95.0, 1543.0], [95.1, 1601.0], [95.2, 1638.0], [95.3, 1704.0], [95.4, 1720.0], [95.5, 1730.0], [95.6, 1737.0], [95.7, 1741.0], [95.8, 1748.0], [95.9, 1752.0], [96.0, 1755.0], [96.1, 1759.0], [96.2, 1764.0], [96.3, 1771.0], [96.4, 1776.0], [96.5, 1780.0], [96.6, 1787.0], [96.7, 1792.0], [96.8, 1796.0], [96.9, 1801.0], [97.0, 1808.0], [97.1, 1815.0], [97.2, 1825.0], [97.3, 1838.0], [97.4, 1869.0], [97.5, 1899.0], [97.6, 1926.0], [97.7, 1979.0], [97.8, 2024.0], [97.9, 2078.0], [98.0, 2115.0], [98.1, 2140.0], [98.2, 2210.0], [98.3, 2273.0], [98.4, 2329.0], [98.5, 2346.0], [98.6, 2396.0], [98.7, 2456.0], [98.8, 2554.0], [98.9, 2616.0], [99.0, 2795.0], [99.1, 2881.0], [99.2, 3010.0], [99.3, 3225.0], [99.4, 3468.0], [99.5, 4129.0], [99.6, 4493.0], [99.7, 4923.0], [99.8, 6857.0], [99.9, 9313.0]], "isOverall": false, "label": "Random-data-API", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 700.0, "maxY": 11802.0, "series": [{"data": [[700.0, 11802.0], [800.0, 2103.0], [900.0, 521.0], [1000.0, 706.0], [1100.0, 501.0], [1200.0, 117.0], [1300.0, 290.0], [1400.0, 92.0], [1500.0, 35.0], [1600.0, 32.0], [1700.0, 271.0], [1800.0, 107.0], [1900.0, 36.0], [2000.0, 37.0], [2100.0, 40.0], [2200.0, 31.0], [2300.0, 43.0], [2400.0, 27.0], [2500.0, 17.0], [2600.0, 13.0], [2800.0, 18.0], [2700.0, 11.0], [2900.0, 13.0], [3000.0, 7.0], [3100.0, 6.0], [3200.0, 10.0], [3300.0, 7.0], [3400.0, 6.0], [3500.0, 4.0], [3600.0, 1.0], [3700.0, 1.0], [3800.0, 4.0], [3900.0, 2.0], [4000.0, 2.0], [4100.0, 4.0], [4300.0, 9.0], [4200.0, 4.0], [4500.0, 2.0], [4600.0, 3.0], [4400.0, 4.0], [4800.0, 5.0], [4700.0, 3.0], [5000.0, 2.0], [4900.0, 3.0], [5100.0, 1.0], [5200.0, 2.0], [5400.0, 2.0], [5700.0, 1.0], [6100.0, 1.0], [5900.0, 1.0], [6000.0, 1.0], [6200.0, 2.0], [6700.0, 2.0], [6900.0, 2.0], [6800.0, 2.0], [7100.0, 1.0], [7000.0, 3.0], [7400.0, 1.0], [7600.0, 1.0], [7900.0, 1.0], [8000.0, 2.0], [8500.0, 2.0], [8400.0, 1.0], [8600.0, 1.0], [8900.0, 1.0], [9300.0, 1.0], [9600.0, 1.0], [9500.0, 1.0], [10000.0, 1.0], [10200.0, 1.0], [10700.0, 1.0], [10600.0, 1.0], [10300.0, 2.0], [11500.0, 1.0], [11400.0, 1.0], [12100.0, 3.0], [12000.0, 2.0], [15500.0, 1.0]], "isOverall": false, "label": "Random-data-API", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 15500.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 868.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 16132.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 16132.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 868.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 8.240282685512355, "minX": 1.6858113E12, "maxY": 31.31057268722466, "series": [{"data": [[1.68581178E12, 8.672566371681414], [1.6858131E12, 8.641221374045802], [1.68581208E12, 8.992982456140345], [1.68581148E12, 10.396126760563398], [1.68581268E12, 8.286971830985921], [1.68581136E12, 8.522123893805318], [1.68581238E12, 8.391915641476267], [1.68581298E12, 8.44699646643108], [1.68581226E12, 9.630742049469957], [1.68581256E12, 8.240282685512355], [1.68581166E12, 8.771126760563401], [1.68581196E12, 10.394366197183102], [1.68581154E12, 8.73534635879218], [1.68581286E12, 8.349823321554759], [1.68581184E12, 9.36637168141593], [1.68581244E12, 8.53533568904593], [1.68581304E12, 9.593639575971732], [1.68581214E12, 8.371886120996448], [1.68581274E12, 8.618374558303886], [1.68581202E12, 12.446017699115037], [1.68581232E12, 9.284191829484897], [1.68581142E12, 8.791150442477877], [1.68581172E12, 8.987632508833924], [1.6858113E12, 31.31057268722466], [1.68581292E12, 9.141342756183745], [1.68581262E12, 8.327433628318582], [1.6858116E12, 9.097001763668432], [1.6858128E12, 8.240282685512359], [1.6858119E12, 11.319715808170523], [1.6858125E12, 8.793286219081274], [1.6858122E12, 9.468421052631575]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6858131E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 794.6666666666666, "minX": 1.0, "maxY": 9550.300000000001, "series": [{"data": [[2.0, 2934.0], [4.0, 1383.3333333333335], [5.0, 794.6666666666666], [6.0, 866.3999999999999], [7.0, 800.4941176470589], [8.0, 798.0557898151159], [9.0, 884.73309608541], [10.0, 973.0714725816389], [11.0, 1024.9611742424254], [12.0, 1078.5678571428593], [13.0, 1209.6697819314645], [14.0, 1286.6493506493505], [15.0, 1365.9912280701756], [16.0, 1384.6477272727275], [17.0, 1338.5087719298244], [18.0, 1446.6388888888887], [19.0, 1591.1764705882351], [20.0, 1675.5517241379312], [21.0, 1694.6315789473686], [22.0, 2248.0], [23.0, 1904.6249999999998], [24.0, 1813.857142857143], [25.0, 1727.111111111111], [26.0, 1433.3333333333335], [27.0, 1127.25], [28.0, 3071.75], [29.0, 2620.8571428571427], [30.0, 846.0], [31.0, 871.0], [32.0, 2535.5], [33.0, 3207.0], [35.0, 1405.0], [34.0, 2295.75], [36.0, 1345.3333333333333], [39.0, 2579.5], [38.0, 3001.666666666667], [41.0, 4241.5], [40.0, 2555.5], [67.0, 1370.0], [65.0, 1414.0], [83.0, 4724.0], [84.0, 4431.593750000001], [85.0, 5612.75], [117.0, 9550.300000000001], [116.0, 7191.0714285714275], [118.0, 8064.875], [120.0, 5253.75], [121.0, 4362.0], [122.0, 1331.8333333333335], [123.0, 2626.7000000000003], [124.0, 1478.0], [1.0, 2626.0]], "isOverall": false, "label": "Random-data-API", "isController": false}, {"data": [[9.69982352941173, 914.5248823529427]], "isOverall": false, "label": "Random-data-API-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 124.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 292.56666666666666, "minX": 1.6858113E12, "maxY": 14830.7, "series": [{"data": [[1.68581178E12, 14686.083333333334], [1.6858131E12, 3407.266666666667], [1.68581208E12, 14823.5], [1.68581148E12, 14772.666666666666], [1.68581268E12, 14765.85], [1.68581136E12, 14699.1], [1.68581238E12, 14806.816666666668], [1.68581298E12, 14727.35], [1.68581226E12, 14722.15], [1.68581256E12, 14724.266666666666], [1.68581166E12, 14774.783333333333], [1.68581196E12, 14774.533333333333], [1.68581154E12, 14645.033333333333], [1.68581286E12, 14720.383333333333], [1.68581184E12, 14692.316666666668], [1.68581244E12, 14726.383333333333], [1.68581304E12, 14715.5], [1.68581214E12, 14605.716666666667], [1.68581274E12, 14719.433333333332], [1.68581202E12, 14691.35], [1.68581232E12, 14640.416666666666], [1.68581142E12, 14693.333333333334], [1.68581172E12, 14716.483333333334], [1.6858113E12, 11806.433333333332], [1.68581292E12, 14719.95], [1.68581262E12, 14695.783333333333], [1.6858116E12, 14743.333333333334], [1.6858128E12, 14722.466666666667], [1.6858119E12, 14648.133333333333], [1.6858125E12, 14719.8], [1.6858122E12, 14830.7]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.68581178E12, 1261.8333333333333], [1.6858131E12, 292.56666666666666], [1.68581208E12, 1273.0], [1.68581148E12, 1268.5333333333333], [1.68581268E12, 1268.5333333333333], [1.68581136E12, 1261.8333333333333], [1.68581238E12, 1270.7666666666667], [1.68581298E12, 1264.0666666666666], [1.68581226E12, 1264.0666666666666], [1.68581256E12, 1264.0666666666666], [1.68581166E12, 1268.5333333333333], [1.68581196E12, 1268.5333333333333], [1.68581154E12, 1257.3666666666666], [1.68581286E12, 1264.0666666666666], [1.68581184E12, 1261.8333333333333], [1.68581244E12, 1264.0666666666666], [1.68581304E12, 1264.0666666666666], [1.68581214E12, 1255.1333333333334], [1.68581274E12, 1264.0666666666666], [1.68581202E12, 1261.8333333333333], [1.68581232E12, 1257.3666666666666], [1.68581142E12, 1261.8333333333333], [1.68581172E12, 1264.0666666666666], [1.6858113E12, 1013.9333333333333], [1.68581292E12, 1264.0666666666666], [1.68581262E12, 1261.8333333333333], [1.6858116E12, 1266.3], [1.6858128E12, 1264.0666666666666], [1.6858119E12, 1257.3666666666666], [1.6858125E12, 1264.0666666666666], [1.6858122E12, 1273.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6858131E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 795.360424028269, "minX": 1.6858113E12, "maxY": 1952.0947136563898, "series": [{"data": [[1.68581178E12, 854.1929203539823], [1.6858131E12, 906.7480916030537], [1.68581208E12, 880.1649122807013], [1.68581148E12, 937.3573943661971], [1.68581268E12, 800.4471830985923], [1.68581136E12, 833.7309734513275], [1.68581238E12, 812.6889279437612], [1.68581298E12, 818.3798586572437], [1.68581226E12, 927.0070671378093], [1.68581256E12, 795.360424028269], [1.68581166E12, 867.6954225352105], [1.68581196E12, 1031.5809859154929], [1.68581154E12, 857.4138543516873], [1.68581286E12, 808.7190812720844], [1.68581184E12, 921.8566371681421], [1.68581244E12, 831.4346289752644], [1.68581304E12, 919.4681978798592], [1.68581214E12, 812.4377224199287], [1.68581274E12, 833.8215547703186], [1.68581202E12, 1233.532743362834], [1.68581232E12, 907.4227353463589], [1.68581142E12, 865.8477876106191], [1.68581172E12, 886.6890459363963], [1.6858113E12, 1952.0947136563898], [1.68581292E12, 881.3374558303888], [1.68581262E12, 805.3469026548685], [1.6858116E12, 899.9488536155197], [1.6858128E12, 800.4787985865717], [1.6858119E12, 1114.680284191831], [1.6858125E12, 859.4893992932863], [1.6858122E12, 893.314035087719]], "isOverall": false, "label": "Random-data-API", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6858131E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 795.344522968198, "minX": 1.6858113E12, "maxY": 1945.3193832599102, "series": [{"data": [[1.68581178E12, 854.1185840707963], [1.6858131E12, 906.7404580152674], [1.68581208E12, 880.1070175438605], [1.68581148E12, 937.2992957746479], [1.68581268E12, 800.441901408451], [1.68581136E12, 833.6707964601774], [1.68581238E12, 812.6678383128292], [1.68581298E12, 818.3727915194343], [1.68581226E12, 926.9840989399293], [1.68581256E12, 795.344522968198], [1.68581166E12, 867.5985915492956], [1.68581196E12, 1031.5404929577476], [1.68581154E12, 857.3676731793958], [1.68581286E12, 808.7084805653711], [1.68581184E12, 921.7876106194697], [1.68581244E12, 831.4098939929329], [1.68581304E12, 919.4558303886934], [1.68581214E12, 812.4163701067613], [1.68581274E12, 833.814487632508], [1.68581202E12, 1233.493805309734], [1.68581232E12, 907.3996447602137], [1.68581142E12, 865.7610619469026], [1.68581172E12, 886.6519434628979], [1.6858113E12, 1945.3193832599102], [1.68581292E12, 881.3286219081273], [1.68581262E12, 805.3362831858401], [1.6858116E12, 899.8518518518525], [1.6858128E12, 800.4752650176677], [1.6858119E12, 1114.4902309058625], [1.6858125E12, 859.4699646643114], [1.6858122E12, 892.6614035087716]], "isOverall": false, "label": "Random-data-API", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6858131E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 520.2402826855124, "minX": 1.6858113E12, "maxY": 1276.9647577092521, "series": [{"data": [[1.68581178E12, 568.5929203539816], [1.6858131E12, 601.1221374045798], [1.68581208E12, 586.2140350877196], [1.68581148E12, 627.4242957746482], [1.68581268E12, 524.8045774647887], [1.68581136E12, 556.3893805309734], [1.68581238E12, 533.7082601054475], [1.68581298E12, 544.3710247349828], [1.68581226E12, 614.8657243816252], [1.68581256E12, 520.2402826855124], [1.68581166E12, 571.7975352112678], [1.68581196E12, 681.2693661971831], [1.68581154E12, 559.0301953818825], [1.68581286E12, 533.7014134275618], [1.68581184E12, 613.2265486725674], [1.68581244E12, 550.0053003533565], [1.68581304E12, 616.3851590106013], [1.68581214E12, 535.631672597865], [1.68581274E12, 543.9399293286216], [1.68581202E12, 825.3238938053096], [1.68581232E12, 601.8898756660748], [1.68581142E12, 572.0601769911505], [1.68581172E12, 580.358657243817], [1.6858113E12, 1276.9647577092521], [1.68581292E12, 588.3551236749117], [1.68581262E12, 529.4442477876105], [1.6858116E12, 579.9647266313929], [1.6858128E12, 520.7985865724381], [1.6858119E12, 756.596802841918], [1.6858125E12, 560.0088339222616], [1.6858122E12, 603.157894736842]], "isOverall": false, "label": "Random-data-API", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6858131E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 750.0, "minX": 1.6858113E12, "maxY": 15520.0, "series": [{"data": [[1.68581178E12, 4129.0], [1.6858131E12, 2934.0], [1.68581208E12, 3842.0], [1.68581148E12, 4366.0], [1.68581268E12, 1770.0], [1.68581136E12, 2803.0], [1.68581238E12, 2288.0], [1.68581298E12, 3066.0], [1.68581226E12, 2631.0], [1.68581256E12, 1903.0], [1.68581166E12, 2898.0], [1.68581196E12, 5031.0], [1.68581154E12, 3019.0], [1.68581286E12, 4364.0], [1.68581184E12, 2984.0], [1.68581244E12, 2548.0], [1.68581304E12, 2439.0], [1.68581214E12, 2414.0], [1.68581274E12, 4493.0], [1.68581202E12, 15520.0], [1.68581232E12, 4120.0], [1.68581142E12, 3419.0], [1.68581172E12, 3210.0], [1.6858113E12, 12193.0], [1.68581292E12, 2867.0], [1.68581262E12, 4350.0], [1.6858116E12, 2540.0], [1.6858128E12, 2105.0], [1.6858119E12, 8950.0], [1.6858125E12, 4214.0], [1.6858122E12, 3895.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.68581178E12, 1011.2000000000005], [1.6858131E12, 1159.7999999999997], [1.68581208E12, 1101.8], [1.68581148E12, 1157.7000000000003], [1.68581268E12, 800.0], [1.68581136E12, 847.6000000000006], [1.68581238E12, 857.0], [1.68581298E12, 848.3], [1.68581226E12, 1174.6000000000001], [1.68581256E12, 791.0], [1.68581166E12, 1088.1], [1.68581196E12, 1752.0], [1.68581154E12, 1021.6], [1.68581286E12, 884.0], [1.68581184E12, 1348.0], [1.68581244E12, 944.8000000000003], [1.68581304E12, 1127.0], [1.68581214E12, 842.7], [1.68581274E12, 986.2], [1.68581202E12, 2132.6000000000004], [1.68581232E12, 1146.2], [1.68581142E12, 1098.8000000000002], [1.68581172E12, 1114.6], [1.6858113E12, 5008.5], [1.68581292E12, 1133.5], [1.68581262E12, 799.0], [1.6858116E12, 1177.4], [1.6858128E12, 821.6], [1.6858119E12, 1854.0], [1.6858125E12, 1037.8000000000006], [1.6858122E12, 1073.3999999999999]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.68581178E12, 1830.7000000000003], [1.6858131E12, 2835.4400000000023], [1.68581208E12, 2465.2499999999955], [1.68581148E12, 4229.529999999997], [1.68581268E12, 1538.1099999999847], [1.68581136E12, 1811.8000000000006], [1.68581238E12, 1794.1999999999998], [1.68581298E12, 1796.3000000000004], [1.68581226E12, 2239.500000000002], [1.68581256E12, 1754.6400000000003], [1.68581166E12, 2195.3699999999876], [1.68581196E12, 2855.7299999999955], [1.68581154E12, 2106.4800000000005], [1.68581286E12, 1415.9900000000002], [1.68581184E12, 2610.220000000001], [1.68581244E12, 1810.570000000001], [1.68581304E12, 1860.52000000001], [1.68581214E12, 1753.74], [1.68581274E12, 1853.5700000000052], [1.68581202E12, 4057.12000000001], [1.68581232E12, 2637.8800000000015], [1.68581142E12, 2258.3600000000015], [1.68581172E12, 2366.6100000000006], [1.6858113E12, 12057.0], [1.68581292E12, 2140.590000000001], [1.68581262E12, 1738.0], [1.6858116E12, 1937.7200000000098], [1.6858128E12, 1384.65], [1.6858119E12, 3429.2000000000016], [1.6858125E12, 2167.590000000005], [1.6858122E12, 3211.5999999999985]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.68581178E12, 1217.0999999999985], [1.6858131E12, 1830.599999999999], [1.68581208E12, 1369.0999999999988], [1.68581148E12, 1737.6999999999994], [1.68581268E12, 1059.4999999999995], [1.68581136E12, 1109.6999999999998], [1.68581238E12, 1049.0], [1.68581298E12, 1097.6], [1.68581226E12, 1639.7999999999988], [1.68581256E12, 926.7499999999987], [1.68581166E12, 1361.8499999999997], [1.68581196E12, 2082.3499999999995], [1.68581154E12, 1412.5999999999985], [1.68581286E12, 1033.0], [1.68581184E12, 1771.6999999999998], [1.68581244E12, 1152.599999999999], [1.68581304E12, 1222.8999999999999], [1.68581214E12, 1069.4], [1.68581274E12, 1112.1499999999996], [1.68581202E12, 2673.4999999999955], [1.68581232E12, 1730.5999999999995], [1.68581142E12, 1350.7999999999997], [1.68581172E12, 1375.3], [1.6858113E12, 7969.0], [1.68581292E12, 1382.85], [1.68581262E12, 1020.0], [1.6858116E12, 1385.0], [1.6858128E12, 955.8499999999989], [1.6858119E12, 2330.9999999999995], [1.6858125E12, 1729.1499999999996], [1.6858122E12, 1175.8999999999999]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.68581178E12, 757.0], [1.6858131E12, 754.0], [1.68581208E12, 753.0], [1.68581148E12, 754.0], [1.68581268E12, 750.0], [1.68581136E12, 755.0], [1.68581238E12, 751.0], [1.68581298E12, 751.0], [1.68581226E12, 752.0], [1.68581256E12, 750.0], [1.68581166E12, 757.0], [1.68581196E12, 757.0], [1.68581154E12, 754.0], [1.68581286E12, 750.0], [1.68581184E12, 757.0], [1.68581244E12, 752.0], [1.68581304E12, 751.0], [1.68581214E12, 753.0], [1.68581274E12, 751.0], [1.68581202E12, 752.0], [1.68581232E12, 752.0], [1.68581142E12, 754.0], [1.68581172E12, 755.0], [1.6858113E12, 757.0], [1.68581292E12, 750.0], [1.68581262E12, 750.0], [1.6858116E12, 758.0], [1.6858128E12, 751.0], [1.6858119E12, 760.0], [1.6858125E12, 750.0], [1.6858122E12, 753.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.68581178E12, 787.0], [1.6858131E12, 772.0], [1.68581208E12, 777.0], [1.68581148E12, 787.0], [1.68581268E12, 768.0], [1.68581136E12, 777.0], [1.68581238E12, 770.0], [1.68581298E12, 770.0], [1.68581226E12, 802.0], [1.68581256E12, 767.0], [1.68581166E12, 788.0], [1.68581196E12, 804.0], [1.68581154E12, 780.0], [1.68581286E12, 771.0], [1.68581184E12, 787.0], [1.68581244E12, 773.0], [1.68581304E12, 845.0], [1.68581214E12, 773.0], [1.68581274E12, 773.0], [1.68581202E12, 912.0], [1.68581232E12, 776.0], [1.68581142E12, 781.0], [1.68581172E12, 788.0], [1.6858113E12, 830.5], [1.68581292E12, 774.0], [1.68581262E12, 770.0], [1.6858116E12, 799.0], [1.6858128E12, 775.0], [1.6858119E12, 850.0], [1.6858125E12, 773.0], [1.6858122E12, 784.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6858131E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 775.5, "minX": 1.0, "maxY": 7035.0, "series": [{"data": [[2.0, 1097.0], [32.0, 1195.5], [36.0, 1408.0], [39.0, 900.0], [41.0, 4802.0], [40.0, 7035.0], [3.0, 1315.0], [4.0, 919.5], [5.0, 845.0], [6.0, 857.0], [7.0, 788.0], [8.0, 783.0], [9.0, 776.0], [10.0, 775.5], [11.0, 787.0], [12.0, 804.5], [13.0, 838.0], [14.0, 885.0], [15.0, 876.0], [1.0, 2493.0], [17.0, 1065.0], [18.0, 1217.5], [19.0, 867.5], [20.0, 1699.5], [21.0, 827.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 41.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 775.0, "minX": 1.0, "maxY": 7035.0, "series": [{"data": [[2.0, 1097.0], [32.0, 1195.5], [36.0, 1403.0], [39.0, 899.0], [41.0, 4629.0], [40.0, 7035.0], [3.0, 1315.0], [4.0, 919.5], [5.0, 845.0], [6.0, 857.0], [7.0, 788.0], [8.0, 783.0], [9.0, 776.0], [10.0, 775.0], [11.0, 787.0], [12.0, 804.5], [13.0, 838.0], [14.0, 885.0], [15.0, 876.0], [1.0, 2492.5], [17.0, 1065.0], [18.0, 1217.5], [19.0, 867.5], [20.0, 1699.5], [21.0, 827.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 41.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 2.066666666666667, "minX": 1.6858113E12, "maxY": 9.45, "series": [{"data": [[1.68581178E12, 9.433333333333334], [1.6858131E12, 2.066666666666667], [1.68581208E12, 9.45], [1.68581148E12, 9.433333333333334], [1.68581268E12, 9.433333333333334], [1.68581136E12, 9.433333333333334], [1.68581238E12, 9.433333333333334], [1.68581298E12, 9.433333333333334], [1.68581226E12, 9.433333333333334], [1.68581256E12, 9.433333333333334], [1.68581166E12, 9.433333333333334], [1.68581196E12, 9.433333333333334], [1.68581154E12, 9.433333333333334], [1.68581286E12, 9.433333333333334], [1.68581184E12, 9.433333333333334], [1.68581244E12, 9.433333333333334], [1.68581304E12, 9.433333333333334], [1.68581214E12, 9.433333333333334], [1.68581274E12, 9.433333333333334], [1.68581202E12, 9.433333333333334], [1.68581232E12, 9.433333333333334], [1.68581142E12, 9.433333333333334], [1.68581172E12, 9.433333333333334], [1.6858113E12, 7.683333333333334], [1.68581292E12, 9.433333333333334], [1.68581262E12, 9.433333333333334], [1.6858116E12, 9.433333333333334], [1.6858128E12, 9.433333333333334], [1.6858119E12, 9.433333333333334], [1.6858125E12, 9.433333333333334], [1.6858122E12, 9.433333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6858131E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 2.183333333333333, "minX": 1.6858113E12, "maxY": 9.5, "series": [{"data": [[1.68581178E12, 9.416666666666666], [1.6858131E12, 2.183333333333333], [1.68581208E12, 9.5], [1.68581148E12, 9.466666666666667], [1.68581268E12, 9.466666666666667], [1.68581136E12, 9.416666666666666], [1.68581238E12, 9.483333333333333], [1.68581298E12, 9.433333333333334], [1.68581226E12, 9.433333333333334], [1.68581256E12, 9.433333333333334], [1.68581166E12, 9.466666666666667], [1.68581196E12, 9.466666666666667], [1.68581154E12, 9.383333333333333], [1.68581286E12, 9.433333333333334], [1.68581184E12, 9.416666666666666], [1.68581244E12, 9.433333333333334], [1.68581304E12, 9.433333333333334], [1.68581214E12, 9.366666666666667], [1.68581274E12, 9.433333333333334], [1.68581202E12, 9.416666666666666], [1.68581232E12, 9.383333333333333], [1.68581142E12, 9.416666666666666], [1.68581172E12, 9.433333333333334], [1.6858113E12, 7.566666666666666], [1.68581292E12, 9.433333333333334], [1.68581262E12, 9.416666666666666], [1.6858116E12, 9.45], [1.6858128E12, 9.433333333333334], [1.6858119E12, 9.383333333333333], [1.6858125E12, 9.433333333333334], [1.6858122E12, 9.5]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6858131E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 2.183333333333333, "minX": 1.6858113E12, "maxY": 9.5, "series": [{"data": [[1.68581178E12, 9.416666666666666], [1.6858131E12, 2.183333333333333], [1.68581208E12, 9.5], [1.68581148E12, 9.466666666666667], [1.68581268E12, 9.466666666666667], [1.68581136E12, 9.416666666666666], [1.68581238E12, 9.483333333333333], [1.68581298E12, 9.433333333333334], [1.68581226E12, 9.433333333333334], [1.68581256E12, 9.433333333333334], [1.68581166E12, 9.466666666666667], [1.68581196E12, 9.466666666666667], [1.68581154E12, 9.383333333333333], [1.68581286E12, 9.433333333333334], [1.68581184E12, 9.416666666666666], [1.68581244E12, 9.433333333333334], [1.68581304E12, 9.433333333333334], [1.68581214E12, 9.366666666666667], [1.68581274E12, 9.433333333333334], [1.68581202E12, 9.416666666666666], [1.68581232E12, 9.383333333333333], [1.68581142E12, 9.416666666666666], [1.68581172E12, 9.433333333333334], [1.6858113E12, 7.566666666666666], [1.68581292E12, 9.433333333333334], [1.68581262E12, 9.416666666666666], [1.6858116E12, 9.45], [1.6858128E12, 9.433333333333334], [1.6858119E12, 9.383333333333333], [1.6858125E12, 9.433333333333334], [1.6858122E12, 9.5]], "isOverall": false, "label": "Random-data-API-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6858131E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 2.183333333333333, "minX": 1.6858113E12, "maxY": 9.5, "series": [{"data": [[1.68581178E12, 9.416666666666666], [1.6858131E12, 2.183333333333333], [1.68581208E12, 9.5], [1.68581148E12, 9.466666666666667], [1.68581268E12, 9.466666666666667], [1.68581136E12, 9.416666666666666], [1.68581238E12, 9.483333333333333], [1.68581298E12, 9.433333333333334], [1.68581226E12, 9.433333333333334], [1.68581256E12, 9.433333333333334], [1.68581166E12, 9.466666666666667], [1.68581196E12, 9.466666666666667], [1.68581154E12, 9.383333333333333], [1.68581286E12, 9.433333333333334], [1.68581184E12, 9.416666666666666], [1.68581244E12, 9.433333333333334], [1.68581304E12, 9.433333333333334], [1.68581214E12, 9.366666666666667], [1.68581274E12, 9.433333333333334], [1.68581202E12, 9.416666666666666], [1.68581232E12, 9.383333333333333], [1.68581142E12, 9.416666666666666], [1.68581172E12, 9.433333333333334], [1.6858113E12, 7.566666666666666], [1.68581292E12, 9.433333333333334], [1.68581262E12, 9.416666666666666], [1.6858116E12, 9.45], [1.6858128E12, 9.433333333333334], [1.6858119E12, 9.383333333333333], [1.6858125E12, 9.433333333333334], [1.6858122E12, 9.5]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6858131E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}


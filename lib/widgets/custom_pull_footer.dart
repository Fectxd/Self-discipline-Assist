import 'package:flutter/material.dart';
import 'package:pull_to_refresh/pull_to_refresh.dart';

/// 构建一个完全模仿 header 行为的 footer
///
/// 特点:
/// - 使用 ShowWhenLoading 样式，与示例中的 ClassicFooter 一致
/// - 只在加载时显示，需要越界拉动触发
/// - 提示文字和 header 保持一致的动画效果
Widget buildCustomPullFooter() {
  return CustomFooter(
    height: 60.0,
    loadStyle: LoadStyle.ShowWhenLoading,
    builder: (BuildContext context, LoadStatus? mode) {
      // 只在 canLoading 和 loading 状态显示提示文字
      final bool shouldShow =
          (mode == LoadStatus.canLoading || mode == LoadStatus.loading);

      String text;
      switch (mode) {
        case LoadStatus.canLoading:
          text = '松手切换到后一天';
          break;
        case LoadStatus.loading:
          text = '正在切换到后一天...';
          break;
        default:
          text = '';
      }

      return SizedBox(
        height: 60,
        child: Center(
          child: AnimatedOpacity(
            duration: const Duration(milliseconds: 150),
            opacity: shouldShow ? 1.0 : 0.0,
            child: shouldShow
                ? Container(
                    padding: const EdgeInsets.symmetric(
                      horizontal: 16,
                      vertical: 8,
                    ),
                    decoration: BoxDecoration(
                      color: Colors.blue.shade600,
                      borderRadius: BorderRadius.circular(20),
                      boxShadow: [
                        BoxShadow(
                          color: Colors.black.withValues(alpha: 0.14),
                          blurRadius: 8,
                          offset: const Offset(0, 2),
                        ),
                      ],
                    ),
                    child: Text(
                      text,
                      style: const TextStyle(
                        color: Colors.white,
                        fontSize: 13,
                        fontWeight: FontWeight.w500,
                      ),
                    ),
                  )
                : const SizedBox.shrink(),
          ),
        ),
      );
    },
  );
}
